import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js  ';
import { validateSchema } from '../middleware/validateSchema.js';
import {
  registerUser,
  loginUser,
  getProfile,
  updateUserStatus
} from '../controllers/auth.controller.js';
import {
  registerSchema,
  loginSchema,
  userStatusSchema
  
} from '../schemas/user.schema.js';

const router = express.Router();

router.post('/register', validateSchema(registerSchema), registerUser);
router.post('/login', validateSchema(loginSchema), loginUser);
router.get('/me', verifyToken, getProfile);
router.put('/estado/:id', verifyToken, validateSchema(userStatusSchema), updateUserStatus);

export default router;
