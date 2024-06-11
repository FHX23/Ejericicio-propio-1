import express, { response } from 'express';

const app = express()
const port = 3000 // 3000-5000

app.get('/ruta',(request,response)=>{
    response.send('esta es una ruta basica de express')
})

app.get('/ruta-nueva',(request,response)=>{
    response.send('esta es una ruta basica de express 2 electric bugalo')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })