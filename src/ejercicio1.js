// const express = require('express') // Version CommonJS
import express from 'express';

const app = express()
const port = 3000 // 3000-5000

app.get('/', (request, response) => {
  response.send('Hello World!')
})

// http://localhost:3000/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})