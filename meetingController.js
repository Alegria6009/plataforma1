// controllers/meetingController.js

const Meeting = require('../models/Meeting');
const Group = require('../models/Group');

// Criar nova reunião
exports.createMeeting = async(req, res) => {
    const { titulo, descricao, data, participantes, grupoId } = req.body;

    try {
        // Verificar se o grupo existe
        const grupo = await Group.findById(grupoId);
        if (!grupo) {
            return res.status(404).json({ msg: 'Grupo não encontrado' });
        }

        // Criar nova reunião
        const meeting = new Meeting({
            titulo,
            descricao,
            data,
            participantes,
            grupo: grupoId,
        });

        await meeting.save();
        res.status(201).json({ msg: 'Reunião criada com sucesso!', meeting });
    } catch (err) {
        res.status(500).json({ msg: 'Erro ao criar reunião', error: err.message });
    }
};

// Obter todas as reuniões de um grupo
exports.getMeetings = async(req, res) => {
    const { grupoId } = req.params;

    try {
        const meetings = await Meeting.find({ grupo: grupoId }).populate('participantes', 'nome email').populate('grupo', 'nome');
        res.status(200).json({ meetings });
    } catch (err) {
        res.status(500).json({ msg: 'Erro ao buscar reuniões', error: err.message });
    }
};