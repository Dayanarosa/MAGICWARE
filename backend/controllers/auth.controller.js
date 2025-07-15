import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from '../config/db.js';
import { createUser, findUserByNombre, findUserById } from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const { nombre, correo, contraseña, id_rol } = req.body;

    // Hashear contraseña y guardar...
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const sql = `INSERT INTO usuarios (nombre, correo, contraseña, id_rol, estado, ultimo_acceso)
                 VALUES (?, ?, ?, ?, 'Activo', NULL)`;
    await db.promise().execute(sql, [nombre, correo, hashedPassword, id_rol]);

    res.status(201).json({ message: 'Usuario registrado correctamente' });

  } catch (err) {
    console.error('🚨 Error en registerUser:', err);

    // Si el error es por correo duplicado
    if (err.code === 'ER_DUP_ENTRY' && err.sqlMessage.includes('correo')) {
      return res.status(400).json(['El correo ya está en uso.']);
    }

    // Otros errores
    return res.status(500).json(['Error al registrar usuario.']);
  }
};


export const loginUser = async (req, res) => {
  const { nombre, contraseña } = req.body;

  try {
    const user = await findUserByNombre(nombre);
    if (!user) return res.status(401).json({ error: "Usuario no encontrado" });

    if (user.estado?.trim().toLowerCase() !== 'activo') {
      return res.status(403).json({ error: "Usuario inactivo" });
    }

    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    if (!isPasswordValid) return res.status(401).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user.id_usuario, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error("🚨 Error en loginUser:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    console.error("❌ Error en getProfile:", error);
    res.status(500).json({ error: "Error al obtener datos del usuario" });
  }
};

export const updateUserStatus = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  try {
    const result = await new Promise((resolve, reject) => {
      db.query(
        'UPDATE usuarios SET estado = ? WHERE id_usuario = ?',
        [estado, id],
        (err, results) => {
          if (err) return reject(err);
          resolve(results);
        }
      );
    });

    res.status(200).json({ message: `Usuario actualizado a estado: ${estado}` });
  } catch (err) {
    console.error('❌ Error en updateUserStatus:', err);
    res.status(500).json({ error: 'Error en la base de datos' });
  }
};
