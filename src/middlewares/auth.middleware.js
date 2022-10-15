import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import connection from "../database/database.js";
dotenv.config();

async function checkAuthorization(req, res, next) {
  let token = req.headers?.authorization;
  if (!token) {
    return res.sendStatus(401);
  }
  const newtoken = token.replace("Bearer ", "");

  try {
    const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET);

    const userToken = (
      await connection.query('SELECT token FROM sessions WHERE "userId"=$1;', [
        verifyToken.user_id,
      ])
    ).rows[0];
    if (token !== userToken.token) {
      return res.sendStatus(401);
    }
    res.locals.userId = verifyToken.user_id;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}

export default checkAuthorization;
