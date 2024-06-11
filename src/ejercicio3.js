// const express = require('express') // Version CommonJS
import express from 'express';

const app = express()
const port = 3000 // 3000-5000

app.use(express.json());// nos sirve para enviar datos en formato json

app.post('/datos',(request,response) =>{
    const datos = request.body;
    console.log("datos enviados por thunder",datos);
    response.send(`recibido: ${JSON.stringify(datos)}`)
})

// http://localhost:3000/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
