// app.js
import express from 'express';
import router from './routes.js';  // Importar las rutas desde el archivo routes.js

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

// Usar las rutas importadas
app.use('/', router);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
