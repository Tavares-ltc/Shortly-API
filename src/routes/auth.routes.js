import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';
import verifySigninSchema from '../middlewares/signin.schema.js';
import verifySignupSchema from '../middlewares/signup.schema.js';
const router = express.Router();

router.post('/signup',verifySignupSchema, signup)
router.post('/signin', verifySigninSchema, signin)

export default router;