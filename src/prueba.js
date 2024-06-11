import express from 'express';

const app = express();
const port = 3000;

// Ruta principal que muestra un botón que lleva a las rutas del código 2
app.get('/', (request, response) => {
  response.send(`
    <html>
      <body>
        <h1>Hello World!</h1>
        <button onclick="window.location.href='/ruta'">Ir a Ruta</button>
        <button onclick="window.location.href='/ruta-nueva'">Ir a Ruta Nueva</button>
      </body>
    </html>
  `);
});

// Ruta que coincide con la del código 2
app.get('/ruta', (request, response) => {
  response.send('esta es una ruta basica de express');
});

// Otra ruta que coincide con la del código 2
app.get('/ruta-nueva', (request, response) => {
  response.send('esta es una ruta basica de express 2 electric bugalo');
});

// http://localhost:3000/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});