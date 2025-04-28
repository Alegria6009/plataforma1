// routes/auth.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController'); // Certifique-se de que o caminho está correto

// Rota de registro
router.post('/register', (req, res) => {
    // Código de registro aqui
});

// Rota de login
router.post('/login', (req, res) => {
    // Código de login aqui
});

module.exports = router;