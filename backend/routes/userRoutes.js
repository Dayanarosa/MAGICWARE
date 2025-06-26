import express from 'express';
import { verifyToken, checkRole } from '../middleware/authMiddleWare.js';

const router = express.Router();

//get /admin 
router.get('/admin', verifyToken, checkRole(['admin']), (req, res) => {
    res.status(200).json ({ message: 'Bienvenido al área de administración' });
});

//get /supervisor
router.get('/supervisor', verifyToken, checkRole(['supervisor']), (req, res) => {
    res.status(200).json({ message: 'Bienvenido al área de supervisión' });
});

//get /empleado

router.get('/empleado', verifyToken, checkRole(['empleado']), (req, res) => {
    res.status(200).json({ message: 'Bienvenido al área de empleados' });
});


export default router;