import bcrypt from 'bcryptjs';
import db from '../config/db.js';

// REGISTRAR USUARIO
export const createUser = async (nombre, contraseña, rol) => {
  const hashedPassword = await bcrypt.hash(contraseña, 10);
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO usuarios (nombre, contraseña, rol) VALUES (?, ?, ?)',
      [nombre, hashedPassword, rol],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

// BUSCAR USUARIO POR NOMBRE
export const findUserByNombre = (nombre) => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM usuarios WHERE nombre = ?',
      [nombre],
      (err, results) => {
        if (err) return reject(err);
        if (!results || results.length === 0) return resolve(null);
        resolve(results[0]);
      }
    );
  });
};

// BUSCAR USUARIO POR ID
export const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT id_usuario, nombre, rol FROM usuarios WHERE id_usuario = ?',
      [id],
      (err, results) => {
        if (err) return reject(err);
        if (!results || results.length === 0) return resolve(null);
        resolve(results[0]);
      }
    );
  });
};
