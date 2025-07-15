import React, { useEffect } from 'react'; // Import useEffect
import '../styles/GestionUsuarios.css';
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebaradm";
import { useAuth } from '../context/AuthContext'; // Import useAuth

const GestionUsuarios = () => {
  // Destructure usuario and logout from the authentication context
  const { usuario, logout, loading } = useAuth();

  // Show loading state if user data is not yet available
  if (loading) {
    return <p>Cargando información de usuario...</p>;
  }

  // If no user is logged in after loading, you might want to redirect
  // This is a basic check; your AuthProvider already handles navigation on token issues.
  if (!usuario) {
    return <p>No hay usuario autenticado. Redirigiendo...</p>;
  }

  return (
    <div className="gestionusuarios-app">
      <Sidebar />

      <div className="gestionusuarios-contenido">
        <div className="gestionusuarios-superior">
          {/* Display user's role and name if available */}
          <span className="gestionusuarios-rol">
            {usuario.rol ? usuario.rol.toUpperCase() : 'ROL DESCONOCIDO'}
          </span>
          <span className="gestionusuarios-nombre">
            {usuario.nombre ? ` (${usuario.nombre})` : ''}
          </span>
          {/* Attach the logout function to the button's onClick event */}
          <button
            className="gestionusuarios-cerrar-sesion"
            onClick={logout} // Call the logout function when clicked
          >
            Cerrar sesión
          </button>
        </div>

        <div className="gestionusuarios-main">
          <h1>GESTIÓN USUARIOS</h1>
          <div className="gestionusuarios-central">
            <div className="gestionusuarios-stock">
              <div className="gestionusuarios-header">
                <Link to="/registrarusuario" className="gestionusuarios-btn-agregar">
                  REGISTRAR USUARIO <span>＋</span>
                </Link>
              </div>

              <input
                type="text"
                placeholder="BUSCAR PRODUCTOS"
                className="gestionusuarios-buscar"
              />

              <div className="gestionusuarios-tabla">
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Último acceso</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nombre 1</td>
                      <td>nombre@empresa.com</td>
                      <td>Administrador</td>
                      <td>Activo</td>
                      <td>00/00/2000</td>
                      <td>
                        <span className="gestionusuarios-editar">✏️</span>
                        <span className="gestionusuarios-eliminar">🗑️</span>
                      </td>
                    </tr>
                    {/* More user rows would go here, likely fetched from an API */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionUsuarios;
