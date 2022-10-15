import connection from "../database/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

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

async function signin(req, res){

    const {password, email} = req.body;
    
    try {
        const user = (await connection.query('SELECT * FROM users WHERE email = $1;', [email])).rows[0];
        

        if(!user || !(bcrypt.compareSync(password, user.password))){
            return res.sendStatus(401);
        }
        const token = jwt.sign({
            user_id: user.id
        }, process.env.TOKEN_SECRET)

        const hasToken = (await connection.query('SELECT token FROM sessions WHERE "userId" = $1;', [user.id])).rows[0];
        if(hasToken){
            await connection.query('UPDATE sessions SET token=$1, "createdAt"=NOW() WHERE "userId"=$2;',[token, user.id])
            res.status(200);
            return res.send({token: token})
        }


        const promise = await connection.query(`INSERT INTO sessions("userId", token) VALUES ($1, $2);`,[user.id, token ]);
        if(promise.rowCount < 1){
            return res.sendStatus(500);
        }
        res.status(200)
        return res.send({token: token})
        
} catch (error) {
    res.status(500)
    res.send(error.message)
}
}

export {
    signup,
    signin
}