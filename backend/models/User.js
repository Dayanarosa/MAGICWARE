import bcrypt from 'bcryptjs';
import db from '../config/db.js';

// REGISTRAR USUARIO
export const createUser = async (nombre, correo, contraseña, rol, estado = 'Activo', ultimo_acceso = null) => {
  const hashedPassword = await bcrypt.hash(contraseña, 10);

  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO usuarios (nombre, correo, contraseña, rol, estado, ultimo_acceso)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre, correo, hashedPassword, rol, estado, ultimo_acceso],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

// BUSCAR USUARIO POR NOMBRE (incluye la contraseña para el login)
export const findUserByNombre = (nombre) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT id_usuario, nombre, correo, rol, estado, ultimo_acceso, contraseña
       FROM usuarios WHERE nombre = ?`,
      [nombre],
      (err, results) => {
        if (err) return reject(err);
        if (!results || results.length === 0) return resolve(null);
        resolve(results[0]);
      }
    );
  });
};

// BUSCAR USUARIO POR ID (opcionalmente puedes excluir la contraseña)
export const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT id_usuario, nombre, correo, rol, estado, ultimo_acceso
       FROM usuarios WHERE id_usuario = ?`,
      [id],
      (err, results) => {
        if (err) return reject(err);
        if (!results || results.length === 0) return resolve(null);
        resolve(results[0]);
      }
    );
  });
};
