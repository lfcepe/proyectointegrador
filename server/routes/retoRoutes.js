let express = require('express');
let router = express.Router();
let path = require('path');
let retoController = require('../controllers/retoController');
let app = express();
//Ruta para agregar un nuevo reto.
router.post('/agregarreto', retoController.AgregarReto);
//ruta para cargar la plantilla de agregar un reto
router.get('/agregarreto', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/views/agregarreto.html'));
  });
module.exports = router;

//Ruta para cargar la plantilla del index
router.get('/todos', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../../client/views/index.html'))}),

//ruta de la api con todos los datos
router.get('/api/todos', retoController.obtenerTodosLosRetos);