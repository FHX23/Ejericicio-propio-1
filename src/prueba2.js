import express from 'express';

const app = express();
const port = 3000;
app.use(express.static('public'));

// Ruta principal que muestra los botones y el mensaje "Hello World!"
app.get('/', (request, response) => {
    response.send(`
      <html>
        <head>
          <link href="/styles.css" rel="stylesheet">
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
                  
                  <!-- Orange Button -->
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
