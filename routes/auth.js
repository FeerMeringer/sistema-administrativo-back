import express from 'express';
import validator from '../middlewares/validator.js';
import userSchema from '../schemas/user.js';
import { signIn, signOut } from '../controllers/auth.js';

const router = express.Router();


// Rutas de autenticación
router.post('/signin', validator(userSchema), signIn);
router.post('/signout', signOut) 

export default router;



