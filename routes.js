const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // aqui que tá dando undefined

router.post('/register', authController.register); // ERRO
router.post('/login', authController.login); // ERRO

module.exports = router;