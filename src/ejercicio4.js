import express from 'express';

const app = express()
const port = 3000 // 3000-5000

app.get('/buscar', (request, response) => {
  const query = request.query.a; 
  response.send(`buscando: ${query}`) // a es la variable por asi decirlo y el dato que busca se lo damos 
})
app.get('/consulta/:id', (request, response) => {
    const parametro = request.params.id;
    response.send(`parametro: ${parametro}`)
  })
// http://localhost:3000/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})