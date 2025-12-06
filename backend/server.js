require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json()); // permissão pra ler o json enviado pelo front
app.use(cors()); // libera o acesso do front

// conecta sem expor as credenciais no código
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch(err => console.error("Erro: ", err));

// modelo
const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String
});
const Usuario = mongoose.model('Usuario', UsuarioSchema);

// API (endpoints)

// rota para CRIAR um usuário (POST)
app.post('/usuarios', async (req, res) => {
    try {
        const novoUsuario = new Usuario(req.body);
        await novoUsuario.save();
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// rota para LISTAR usuários (GET)
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// rota para DELETAR usuários (DELETE)
app.delete('/usuarios/:id', async (req, res) => {
    try {
        // req.params.id pega o valor que veio na URL
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensagem: "Usuário deletado com sucesso!" });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// roda o Servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});