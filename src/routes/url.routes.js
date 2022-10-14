import express from "express";
import checkAuthorization from "../middlewares/auth.middleware.js";
import { shortenURL } from "../controllers/url.controller.js";
import { auxParam, verifySchema } from "../middlewares/schemas.middleware.js";
const router = express.Router();

router.post("/url/shorten", checkAuthorization, auxParam('postURL'), verifySchema, shortenURL);

export default router;
