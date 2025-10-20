import express from 'express';
import cors from 'cors';
import { databasePostgres } from './databasePostgres';
import './createTable.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const database = new databasePostgres();

app.post('/auth/register', async(req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({ msg: 'Preencha todos os campos! '});
    }

    const existingUser = await database.findByEmail(email);
    if(existingUser){
        return res.status(400).json({ msg: 'Email já cadastrado!'});
    }

    await database.create({ name, email, password});
    res.status(201).json({ msg: 'Usuário criado!'});
})

app.post('/auth/login', async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ msg: 'Preencha email e senha!'});
    }

})