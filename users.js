const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Endpoint para criar um usuário
router.post('/create', (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    // Inserir no banco de dados
    const query = 'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)';
    db.query(query, [nome, email, senha], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar usuário!' });
        }
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    });
});

module.exports = router;