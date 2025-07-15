import db from '../config/db.js';

export const getRoles = (req, res) => {
  const sql = 'SELECT id_rol, nombre_rol FROM roles';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Error al obtener los roles:', err);
      return res.status(500).json({ error: 'Error al obtener los roles' });
    }

    res.status(200).json(results);
  });
};
