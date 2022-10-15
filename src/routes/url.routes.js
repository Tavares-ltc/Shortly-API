import express from "express";
import checkAuthorization from "../middlewares/auth.middleware.js";
import { getURL, openURL, shortenURL } from "../controllers/url.controller.js";
import { auxParam, verifySchema } from "../middlewares/schemas.middleware.js";
const router = express.Router();

router.post("/urls/shorten", checkAuthorization, auxParam('postURL'), verifySchema, shortenURL);
router.get("/urls/:id", getURL)
router.get("/urls/open/:shortUrl", openURL)
export default router;
