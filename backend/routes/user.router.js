import express from 'express';
import { verifyToken, checkRole } from '../middleware/authMiddleware.js';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/user.controller.js';

const router = express.Router();

// Solo Administradores pueden acceder
router.get('/', verifyToken, checkRole(['Administrador']), getAllUsers);
router.get('/:id', verifyToken, checkRole(['Administrador']), getUserById);
router.put('/:id', verifyToken, checkRole(['Administrador']), updateUser);
router.delete('/:id', verifyToken, checkRole(['Administrador']), deleteUser);

export default router;
