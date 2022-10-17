import connection from "../database/database.js";
import express from "express";
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
async function getURL(req, res) {
  const urlId = req.params.id;

  try {
    const url = (
      await connection.query(
        'SELECT id, "shortUrl", url FROM urls WHERE id = $1;',
        [urlId]
      )
    ).rows[0];
    if (!url) {
      return res.sendStatus(404);
    }
    res.status(200);
    res.send(url);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function openURL(req, res) {
  const shortURL = req.params.shortUrl;
  try {
    const url = (
      await connection.query('SELECT * FROM urls WHERE "shortUrl" = $1;', [
        shortURL,
      ])
    ).rows[0];
    const response = await connection.query(
      'INSERT INTO views ("urlId") VALUES ($1);',
      [url.id]
    );
    return res.redirect(url.url);
  } catch (error) {
    res.sendStatus(404);
  }
}

async function deleteURL(req, res) {
  const urlId = req.params.id;
  const userId = res.locals.userId;
  try {
    const url = (
      await connection.query("SELECT * FROM urls WHERE id = $1;", [urlId])
    ).rows[0];
    if (!url) {
      return res.sendStatus(404);
    }
    if (url.userId !== userId) {
      return res.sendStatus(401);
    }
    await connection.query('DELETE FROM views WHERE "urlId" = $1;', [urlId]);
    await connection.query("DELETE FROM urls WHERE id = $1;", [urlId]);

    res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
}

async function listUrserUrls(req, res) {
  const userId = res.locals.userId;
  try {
    const userData = (
      await connection.query(
        `
    SELECT users.id, users.name, users.email, urls.url,urls.id 
    AS "urlId", urls."shortUrl", 
    COUNT(views."urlId") AS "visitCount"  
    FROM users 
    JOIN urls 
    ON users.id = "userId" 
    LEFT JOIN views ON urls.id = "urlId"
    WHERE users.id = $1 
    GROUP BY users.id,users.name,urls.id, urls.url,
     users.email, urls."shortUrl" , views."urlId";`,
        [userId]
      )
    ).rows;
    if(userData.length === 0){
      return res.sendStatus(404);
    }
    let sum = 0;
    userData.forEach((value) => {
      sum += Number(value.visitCount);
    });
    const shortenedUrls = [];
    userData.forEach((value)=> {
      shortenedUrls.push({
        id: value.urlId,
        shortUrl: value.shortUrl,
        url: value.url,
        visitCount: Number(value.visitCount)
      })
    })
    console.log(shortenedUrls)
    const resp = {
      id: userData[0].id,
      name: userData[0].name,
      visitCount: sum,
      shortenedUrls
    };
    res.status(200);
    res.send(resp);
  } catch (error) {
    res.sendStatus(500);
  }
}
export { shortenURL, getURL, openURL, deleteURL, listUrserUrls };
