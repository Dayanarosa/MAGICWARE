import bcrypt from 'bcryptjs';
import db from '../config/db.js';

// REGISTRAR USUARIO
export const createUser = async (nombre, correo, contraseña, idRol, estado = 'Activo', ultimo_acceso = null) => {
  const hashedPassword = await bcrypt.hash(contraseña, 10);

  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO usuarios (nombre, correo, contraseña, id_rol, estado, ultimo_acceso)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre, correo, hashedPassword, idRol, estado, ultimo_acceso],
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
      `SELECT u.id_usuario, u.nombre, u.correo, u.id_rol, r.nombre_rol AS rol, u.estado, u.ultimo_acceso, u.contraseña
       FROM usuarios u
       JOIN roles r ON u.id_rol = r.id_rol
       WHERE u.nombre = ?`,
      [nombre],
      (err, results) => {
        if (err) return reject(err);
        if (!results || results.length === 0) return resolve(null);
        resolve(results[0]); // ahora incluye user.rol = "Administrador", "Empleado", etc.
      }
    );
  });
};


// BUSCAR USUARIO POR ID (opcionalmente puedes excluir la contraseña) 
export const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT u.id_usuario, u.nombre, u.correo, u.id_rol, r.nombre_rol AS rol, u.estado, u.ultimo_acceso
       FROM usuarios u
       JOIN roles r ON u.id_rol = r.id_rol
       WHERE u.id_usuario = ?`,
      [id],
      (err, results) => {
        if (err) return reject(err);
        if (!results || results.length === 0) return resolve(null);
        resolve(results[0]); 
      }
    );
  });
};


