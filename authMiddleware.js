const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // Importando o middleware

// Rota de login
router.post('/login', authController.login);

// Rota de registro
router.post('/register', authController.register);

// Rota protegida - exemplo de como usar o middleware de autenticação
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ msg: 'Rota protegida, acesso autorizado!' });
});

module.exports = router;