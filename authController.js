const db = require('../config/db'); // Aqui seria a conexão MySQL

exports.register = async(req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    try {
        const [rows] = await db.promise().execute(
            'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]
        );

        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário.' });
    }
};

exports.login = async(req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }

    try {
        const [rows] = await db.promise().execute(
            'SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]
        );

        if (rows.length > 0) {
            res.status(200).json({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas.' });
        }
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro ao fazer login.' });
    }
};