import connection from "../database/database.js";
import { nanoid } from "nanoid";

async function shortenURL(req, res) {
  const userId = res.locals.userId;
  const url = req.body.url;
  const shortURL = nanoid(8);
  

  try {
    await connection.query(
      'INSERT INTO urls("shortUrl", "url", "userId") VALUES ($1, $2, $3);',
      [shortURL, url, userId]
    );
    res.status(201);
    res.send({ shortURL: shortURL });
  } catch (error) {
    res.sendStatus(500);
  }
}
async function getURL(req, res){
  const urlId = req.params.id;

    try {
        const url = (await connection.query('SELECT id, "shortUrl", url FROM urls WHERE id = $1;', [urlId])).rows[0];
        if(!url){
          return res.sendStatus(404)
        }
        res.status(200);
        res.send(url);
    } catch (error) {
        res.sendStatus(500);
    }

}

export { shortenURL, getURL };
