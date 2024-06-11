import express from 'express';

const app = express()
const port = 3000 // 3000-5000

app.get('/no-encontrado', (request, response) => {
  response.status(404).send('pagina no encontrada')
})

// http://localhost:3000/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})