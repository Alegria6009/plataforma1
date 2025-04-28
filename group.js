// routes/group.js

const express = require('express');
const router = express.Router();

// Rota para criar um novo grupo
router.post('/create', (req, res) => {
    res.send('Grupo criado!');
});

// Rota para listar todos os grupos
router.get('/', (req, res) => {
    res.send('Lista de grupos');
});

module.exports = router;