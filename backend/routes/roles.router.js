import express from 'express';
import { verifyToken, checkRole } from '../middleware/authMiddleware.js';
import { getRoles } from '../controllers/roles.controller.js';

const router = express.Router();

router.get('/admin', verifyToken, checkRole(['Administrador']), (req, res) => {
  res.status(200).json({ message: 'Bienvenido al área de administración' });
});

router.get('/supervisor', verifyToken, checkRole(['Supervisor']), (req, res) => {
  res.status(200).json({ message: 'Bienvenido al área de supervisión' });
});

router.get('/empleado', verifyToken, checkRole(['Empleado']), (req, res) => {
  res.status(200).json({ message: 'Bienvenido al área de empleados' });
});

router.get('/roles', getRoles);

export default router;
