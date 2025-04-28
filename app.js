const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const routes = require('./routes/routes'); // Caminho para o arquivo de rotas

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'maxphisher123',
    database: 'plataforma_reunioes'
});

// Testar conexão
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao MySQL com sucesso!');
    }
});

// Usando as rotas importadas
app.use(routes); // Adicione as rotas no servidor

// Porta
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000 🔥');
});