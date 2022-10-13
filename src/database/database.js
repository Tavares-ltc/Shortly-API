import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { Pool } = pg;
const connection = new Pool({
host: process.env.POSTGRES_URI,
user: process.env.SERVER_USER,
password: process.env.PASSWORD,
database: process.env.DATABASE
});

export default connection;