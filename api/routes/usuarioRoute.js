const { Router } = require('express');

const router = Router();

router
    .post('/usuario')
    .get('/usuario')
    .get('/usuario/id/:id')
    .put('/usuario/id/:id')
    .delete('/usuario/id/:id')

module.exports = router;