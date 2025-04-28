// models/Meeting.js

const mysql = require('mysql2');

const meetingSchema = new mysql.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
    participantes: [{
        type: mysql.Schema.Types.ObjectId,
        ref: 'User',
    }],
    grupo: {
        type: mysql.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
    },
});

module.exports = mysql.model('Meeting', meetingSchema);