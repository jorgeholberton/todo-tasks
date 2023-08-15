const express = require('express');/* libreria que usa rest - http */
const api = require('./api');
const port = process.env.PORT || 3000; /* puerto de red */
const app = express(); /* instancia de express */

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});

app.get('/', function (req, res) {
    res.send("Respuesta Servidor");
});

app.use('/api', api);
