import db from '../config/db.js';

// Obtener todos los usuarios
export const getAllUsers = (req, res) => {
  db.query('SELECT id_usuario, nombre, correo, estado, id_rol FROM usuarios', (err, results) => {
    if (err) {
      console.error('❌ Error al obtener usuarios:', err);
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
};

// Obtener un usuario por ID
export const getUserById = (req, res) => {
  const { id } = req.params;
  db.query(
    'SELECT id_usuario, nombre, correo, estado, id_rol FROM usuarios WHERE id_usuario = ?',
    [id],
    (err, results) => {
      if (err) {
        console.error('❌ Error al buscar usuario:', err);
        return res.status(500).json({ error: 'Error al buscar usuario' });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(results[0]);
    }
  );
};

// Actualizar usuario
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, correo, estado, id_rol } = req.body;

  db.query(
    'UPDATE usuarios SET nombre = ?, correo = ?, estado = ?, id_rol = ? WHERE id_usuario = ?',
    [nombre, correo, estado, id_rol, id],
    (err, result) => {
      if (err) {
        console.error('❌ Error al actualizar usuario:', err);
        return res.status(500).json({ error: 'Error al actualizar usuario' });
      }
      res.json({ message: 'Usuario actualizado correctamente' });
    }
  );
};

// Eliminar usuario
export const deleteUser = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id_usuario = ?', [id], (err, result) => {
    if (err) {
      console.error('❌ Error al eliminar usuario:', err);
      return res.status(500).json({ error: 'Error al eliminar usuario' });
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  });
};
