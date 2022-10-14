import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';
import { auxParam, verifySchema } from '../middlewares/schemas.middleware.js';
const router = express.Router();

router.post('/signup',auxParam('signup'), verifySchema, signup)
router.post('/signin',auxParam('signin'), verifySchema, signin)

export default router;