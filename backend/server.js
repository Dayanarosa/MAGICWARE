import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db.js';

import authRoutes from './routes/auth.router.js';
import userRoutes from './routes/user.router.js';
import rolesRoutes from './routes/roles.router.js'; 

dotenv.config();

const app = express();

// Middleware CORS
app.use(cors({
  origin: 'http://localhost:5173', // cambia según tu frontend
  credentials: true
}));

// Middleware para JSON
app.use(express.json());

// Rutas principales
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api', rolesRoutes);

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    return;
  }
  console.log('✅ Conexión exitosa a la base de datos');
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
