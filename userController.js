// controllers/userController.js
const db = require('../config/db'); // Importa a conexão com o banco

// Listar todos os usuários
exports.getAllUsers = (req, res) => {
    db.query('SELECT id, nome, email FROM usuarios', (error, results) => {
        if (error) {
            console.error('Erro ao buscar usuários:', error);
            return res.status(500).json({ message: 'Erro ao buscar usuários.' });
        }
        res.json(results);
    });
};

// Buscar um usuário pelo ID
exports.getUserById = (req, res) => {
    const userId = req.params.id;

    db.query('SELECT id, nome, email FROM usuarios WHERE id = ?', [userId], (error, results) => {
        if (error) {
            console.error('Erro ao buscar usuário:', error);
            return res.status(500).json({ message: 'Erro ao buscar usuário.' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.json(results[0]);
    });
};

// Atualizar um usuário
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const { nome, email } = req.body;

    db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, userId], (error, results) => {
        if (error) {
            console.error('Erro ao atualizar usuário:', error);
            return res.status(500).json({ message: 'Erro ao atualizar usuário.' });
        }
        res.json({ message: 'Usuário atualizado com sucesso.' });
    });
};

// Deletar um usuário
exports.deleteUser = (req, res) => {
    const userId = req.params.id;

    db.query('DELETE FROM usuarios WHERE id = ?', [userId], (error, results) => {
        if (error) {
            console.error('Erro ao deletar usuário:', error);
            return res.status(500).json({ message: 'Erro ao deletar usuário.' });
        }
        res.json({ message: 'Usuário deletado com sucesso.' });
    });
};