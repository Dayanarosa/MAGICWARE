import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db.js';
import authRouters from './routes/authRouters.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// ✅ CORS bien configurado
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Rutas
app.use('/api/auth', authRouters);
app.use('/api/users', userRoutes);

// Conexión a la BD
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
