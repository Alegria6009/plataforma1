// routes/meeting.js

const express = require('express');
const router = express.Router();
const { createMeeting, getMeetings } = require('../controllers/meetingController');
const authMiddleware = require('../middleware/authMiddleware');

// Criar reunião (apenas usuários autenticados)
router.post('/', authMiddleware, createMeeting);

// Obter todas as reuniões de um grupo
router.get('/:grupoId', authMiddleware, getMeetings);

module.exports = router;