const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('HOLA MUNDO');
});

app.listen(PORT, () => {
    console.log('Esuchando en el puerto ' + PORT);
});