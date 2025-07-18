const { Router } = require('express');

const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router
    .post('/usuario', UsuarioController.cadastrar)
    .get('/usuario')
    .get('/usuario/id/:id')
    .put('/usuario/id/:id')
    .delete('/usuario/id/:id')

module.exports = router;