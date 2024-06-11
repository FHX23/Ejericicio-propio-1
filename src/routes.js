// routes.js
import express from 'express';
const router = express.Router();

// Definir las rutas
router.get('/ruta', (request, response) => {
  response.send('esta es una ruta basica de express 1.0');
});

router.get('/ruta-nueva', (request, response) => {
  response.send('esta es una ruta basica de express 2 electric bugalo');
});

export default router;
