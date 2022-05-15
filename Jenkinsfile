pipeline {

    agent { label 'nodejs' }

    stages {

        stage('Build') {
            steps {
                sh 'docker stop contenedor || echo "No hay contenedor corriendo"'
                sh 'docker rm contenedor || echo "No hay contenedor para borrar"'
                sh 'docker build -t vincenup/${JOB_NAME}:v${BUILD_NUMBER} .'
            }
        }

        stage('Test') {
            steps {
                echo 'Ingresa en la pagina y prueba tu mismo'
            }
        }

        stage('Release') {
            steps {
                sh 'docker tag vincenup/${JOB_NAME}:v${BUILD_NUMBER} vincenup/${JOB_NAME}:latest'
                sh 'docker login -u "vincenup" -p "85c91b79-68d8-496a-89d2-470d97fff5a6" docker.io'
                sh 'docker push vincenup/${JOB_NAME}:v${BUILD_NUMBER}'
                sh 'docker push vincenup/${JOB_NAME}:latest'
                sh 'docker rmi vincenup/${JOB_NAME}:v${BUILD_NUMBER}'
                sh 'docker rmi vincenup/${JOB_NAME}:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 80:3000 --name contenedor vincenup/${JOB_NAME}:latest'
            }
        }

    }
}