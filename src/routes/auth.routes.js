import express from 'express';
import { signup } from '../controllers/auth.controller.js';
import verifySignupSchema from '../middlewares/signup.schema.js';
const router = express.Router();

router.post('/signup',verifySignupSchema, signup)

export default router;