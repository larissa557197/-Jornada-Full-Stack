// API = application programmin interface
// conceta com o banco de dados
// e traz os dados do banco

// REQUISIÇÕES:
// - CRUD: POST, GET, PUT, DELETE

// endpoint = rota que pode ser acessada dentro de uma api

// deixar o servidor rodando direto
// node --watch ./api/server.ja

// visualizar melhor um json pelo google:
// - json viwer chrome


// Middleware : acontence no meio do camiho


import express from 'express';
import cors from "cors";
import { db } from './connect.js';

const app = express();
const PORT = 3000;

app.use(cors());


app.get('/', (request, response) => {
    response.send("Só vamos trabalhar com endpoints '/artists e '/songs")
})

app.get('/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray())
})

app.get('/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
    
})