/*import express from 'express';

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
*/

import express from 'express';

const app = express();
const port = 3000;
app.use(express.static('public'));

// Ruta principal que muestra los botones y el mensaje "Hello World!"
app.get('/', (request, response) => {
  response.send(`
    <html>
      <head>
        <style>
          /* Añadir estilos CSS aquí */
          .bg-gray-900 {
            background-color: #1a202c;
          }
          .text-yellow-400 {
            color: #ecc94b;
          }
          .border-yellow-600 {
            border-color: #d69e2e;
          }
          .hover\\:bg-yellow-600:hover {
            background-color: #d69e2e;
          }
          .hover\\:text-yellow-200:hover {
            color: #fefcbf;
          }
          .text-blue-400 {
            color: #63b3ed;
          }
          .border-blue-600 {
            border-color: #3182ce;
          }
          .hover\\:bg-blue-600:hover {
            background-color: #3182ce;
          }
          .hover\\:text-blue-200:hover {
            color: #bee3f8;
          }
          .flex {
            display: flex;
          }
          .h-screen {
            height: 100vh;
          }
          .w-full {
            width: 100%;
          }
          .m-auto {
            margin: auto;
          }
          .flex-col {
            flex-direction: column;
          }
          .gap-6 {
            gap: 1.5rem;
          }
          .border-2 {
            border-width: 2px;
          }
          .rounded-lg {
            border-radius: 0.5rem;
          }
          .px-3 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .cursor-pointer {
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <h1>Hello World!</h1>
        <div class="bg-gray-900">
          <div class="w-full h-screen">
            <div class="flex h-screen">
              <div class="m-auto flex flex-col gap-6">
                
                <!-- Orange Button -->
                <div class="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200" onclick="window.location.href='/ruta'">
                  Ir a Ruta
                </div>
                
                <!-- Blue Button -->
                <div class="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200" onclick="window.location.href='/ruta-nueva'">
                  Ir a Ruta Nueva
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Ruta que coincide con la del código 2
app.get('/ruta', (request, response) => {
  response.send('Esta es una ruta básica de express');
});

// Otra ruta que coincide con la del código 2
app.get('/ruta-nueva', (request, response) => {
  response.send('Esta es una ruta básica de express 2 electric bugalo');
});

// http://localhost:3000/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
