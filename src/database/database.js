import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config(dotenv.config({ path: '../.env'}));
const {Pool} = pg;

const connection = new Pool({
host: process.env.HOST,
user: process.env.USER,
password: process.env.PASSWORD,
database: process.env.POSTGRES_URI
});

export default connection;