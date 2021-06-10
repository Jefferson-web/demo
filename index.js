const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
    res.send('HOLA MUNDO');
});

app.listen(PORT, () => {
    console.log('Esuchando en el puerto ' + PORT);
});