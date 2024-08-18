import express from 'express'
import { signup } from '../controller/user.controller'

const router = express.Router();

app.post('/signup',signup);

export default router;