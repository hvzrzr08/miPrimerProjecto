const express = require('express')
const app = express();

app.get('*', (request, response) =>{
    response.send({message: 'chanchito felix'})


});

app.listen(3000, () => console.log('nuestro servidor esta escuchando en el puerto 8080WWW'))
