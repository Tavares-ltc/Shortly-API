import express from "express";
import checkAuthorization from "../middlewares/auth.middleware.js";
import { getURL, shortenURL } from "../controllers/url.controller.js";
import { auxParam, verifySchema } from "../middlewares/schemas.middleware.js";
const router = express.Router();

router.post("/urls/shorten", checkAuthorization, auxParam('postURL'), verifySchema, shortenURL);
router.get("/urls/:id", getURL)
export default router;
