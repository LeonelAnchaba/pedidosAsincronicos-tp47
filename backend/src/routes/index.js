const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//Rutas
//Listado de películas
router.get('/', indexController.home);


module.exports = router;