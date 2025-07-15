import mysql from 'mysql2';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect(async (err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos');

  insertarRoles();
  await insertarAdmin(); // 👈 Aquí llamamos la función para crear admin
});

// ✅ Función para insertar roles si no existen
function insertarRoles() {
  const roles = [
    { nombre_rol: 'Administrador', descripcion: 'Rol con permisos de administración total' },
    { nombre_rol: 'Supervisor', descripcion: 'Rol con funciones de supervisión' },
    { nombre_rol: 'Empleado', descripcion: 'Rol con acceso básico al sistema' }
  ];

  roles.forEach((rol) => {
    db.query(
      'SELECT COUNT(*) AS count FROM roles WHERE nombre_rol = ?',
      [rol.nombre_rol],
      (err, results) => {
        if (err) {
          console.error('Error al verificar rol:', err);
          return;
        }

        const count = results[0].count;

        if (count === 0) {
          db.query(
            'INSERT INTO roles (nombre_rol, descripcion) VALUES (?, ?)',
            [rol.nombre_rol, rol.descripcion],
            (insertErr) => {
              if (insertErr) {
                console.error('Error insertando rol:', insertErr);
              } else {
                console.log(`✅ Rol "${rol.nombre_rol}" insertado con éxito.`);
              }
            }
          );
        } else {
          console.log(`ℹ️ El rol "${rol.nombre_rol}" ya existe.`);
        }
      }
    );
  });
}

// ✅ Función para insertar usuario admin si no existe
async function insertarAdmin() {
  const nombre = 'Admin';
  const correo = 'admin@admin.com';
  const contraseñaPlano = 'Admin'; // ⚠️ Cambiar luego por seguridad
  const id_rol = 1; // Asegúrate de que 1 es Administrador
  const estado = 'Activo';
  const ultimo_acceso = null;

  db.query(
    'SELECT COUNT(*) AS count FROM usuarios WHERE nombre = ?',
    [nombre],
    async (err, results) => {
      if (err) {
        console.error('❌ Error al verificar Admin:', err);
        return;
      }

      const count = results[0].count;

      if (count === 0) {
        const hashedPassword = await bcrypt.hash(contraseñaPlano, 10);

        db.query(
          'INSERT INTO usuarios (nombre, correo, contraseña, id_rol, estado, ultimo_acceso) VALUES (?, ?, ?, ?, ?, ?)',
          [nombre, correo, hashedPassword, id_rol, estado, ultimo_acceso],
          (insertErr) => {
            if (insertErr) {
              console.error('❌ Error insertando Admin:', insertErr);
            } else {
              console.log('✅ Usuario Admin creado con éxito.');
            }
          }
        );
      } else {
        console.log('ℹ️ El usuario Admin ya existe. No se insertó.');
      }
    }
  );
}

export default db;
