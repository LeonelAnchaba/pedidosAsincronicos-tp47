const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//Rutas
//Listado de películas
router.get('/', indexController.home);
router.get('/form', indexController.form);
router.post("/", indexController.create)

module.exports = router;