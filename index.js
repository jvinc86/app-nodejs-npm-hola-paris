const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Hola Caracas y a dormir carajo!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`🚀 Webserver listo. Entrar a http://localhost:${port}`));