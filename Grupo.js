// models/User.js

const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const userSchema = new mysql.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
    },
    tipo: { // Admin ou Membro
        type: String,
        enum: ['admin', 'membro'],
        default: 'membro',
    },
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('senha')) return next();
    this.senha = await bcrypt.hash(this.senha, 8);
});

userSchema.methods.compareSenha = async function(senha) {
    return await bcrypt.compare(senha, this.senha);
};

module.exports = mysql.model('User', userSchema);