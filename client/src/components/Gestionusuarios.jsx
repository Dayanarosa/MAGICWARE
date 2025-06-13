import React from 'react';
import '../styles/GestionUsuarios.css';
import { Link } from "react-router-dom";
import Sidebar from "./sidebar"

const GestionUsuarios = () => {
  return (
    <div className="gestionusuarios-app">
      <Sidebar />
      <div className="gestionusuarios-sidebar">
        <div>
          <div className="gestionusuarios-logo">
            <img src="/images/MG_LOGO.png" alt="Logo de la empresa" />
          </div>

          <div className="gestionusuarios-menu">
            <Link to="/">INICIO</Link>
            <Link to="/stock">STOCK</Link>
            <Link to="/informes">INFORMES</Link>
            <Link to="#">GESTIÓN USUARIOS</Link>
            <Link to="/alertasinternas">NOTIFICACIONES</Link>
          </div>
        </div>
      </div>

      <div className="gestionusuarios-contenido">
        <div className="gestionusuarios-superior">
          <span className="gestionusuarios-rol">ADMINISTRADOR</span>
          <button className="gestionusuarios-cerrar-sesion">Cerrar sesión</button>
        </div>

        <div className='gestionusuarios-main'>
          <h1>GESTION USUARIOS</h1>
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
                    {/* Repite más filas según lo necesario */}
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

export default GestionUsuarios

