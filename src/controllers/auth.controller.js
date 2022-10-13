import connection from "../database/database.js";
import bcrypt from 'bcrypt';

async function signup(req, res){
const {name, email, password } = req.body
const encryptedPassword = bcrypt.hashSync(password, 10)
try {
    const emailExists = (await connection.query('SELECT * FROM users WHERE email = $1;', [email])).rows;
    if(emailExists.length > 0){
        return res.sendStatus(409);
    }

    const promise = await connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3);', [name, email, encryptedPassword]);
    if(promise.rowCount < 1){
        return res.sendStatus(500);
    }
    return res.sendStatus(201);

} catch (error) {
    res.sendStatus(500);
}
}

export {
    signup
}