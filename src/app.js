import express from 'express';
import cors from 'cors';
import connection from './database/database.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.SERVER_URL;

app.use(cors());
app.use(express.json());


app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})
