import express from 'express';
import { verifyToken, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

// Área de administración
router.get('/admin', verifyToken, checkRole(['Administrador']), (req, res) => {
  res.status(200).json({ message: 'Bienvenido al área de administración' });
});

// Área de supervisión
router.get('/supervisor', verifyToken, checkRole(['Supervisor']), (req, res) => {
  res.status(200).json({ message: 'Bienvenido al área de supervisión' });
});

// Área de empleados
router.get('/empleado', verifyToken, checkRole(['Empleado']), (req, res) => {
  res.status(200).json({ message: 'Bienvenido al área de empleados' });
});

export default router;
