import express from 'express';

const app = express();
const port = 3000;

// Middleware para analizar datos JSON enviados en las solicitudes
app.use(express.json());

let datosRecibidos = null;

// Manejar solicitud GET a la ruta /datos
app.get('/datos', (request, response) => {
  // Si no se han recibido datos aún, mostrar un mensaje
  if (!datosRecibidos) {
    response.send('<h1>Esperando datos...</h1>');
  } else {
    // Si se han recibido datos, mostrar los datos recibidos
    response.send(`
      <h1>Datos recibidos:</h1>
      <pre>${JSON.stringify(datosRecibidos, null, 2)}</pre>
    `);
  }
});

// Manejar solicitud POST a la ruta /datos
app.post('/datos', (request, response) => {
  datosRecibidos = request.body;
  console.log("Datos enviados por Thunder Client:", datosRecibidos);
  
  // Responder con un mensaje indicando que los datos fueron recibidos
  response.send('Datos recibidos correctamente.');
});

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
