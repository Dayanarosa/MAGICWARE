import React from 'react';
import '../styles/Stock.css';
import { Link } from "react-router-dom";

const gestionusuarios = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <div>
          <div className="logo">
            <img src="/images/MG_LOGO.png" alt="Logo de la empresa" />
          </div>

          <div className="menu">
            <Link to="/">INICIO</Link>
            <Link to="/stock">STOCK</Link>
            <Link to="/informes">INFORMES</Link>
            <Link to="#">GESTIÓN USUARIOS</Link>
            <Link to="/alertasinternas">ALERTAS INTERNAS</Link>
          </div>
        </div>
      </div>

      <div className="contenido">
        <div className="usuario-superior">
          <span className="rol">ADMINISTRADOR</span>
          <button className="cerrar-sesion">Cerrar sesión</button>
        </div>
        <div className='gestionusuarios'>
          <h1>GESTION USUARIOS</h1>
          <div className="texto-central">
            <div className="stock-container">
              <div className="stock-header">
                <Link to="/agregar-producto" className="btn-agregar">
                  REGISTRAR USUARIO <span>＋</span>
                </Link>

              </div>
              <input type="text" placeholder="BUSCAR PRODUCTOS" className="input-buscar" />
              <div className="tabla-contenedor">
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
                        <span className="icon-editar">✏️</span>
                        <span className="icon-eliminar">🗑️</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Nombre 2</td>
                      <td>nombre@empresa.com</td>
                      <td>Supervisor</td>
                      <td>Activo</td>
                      <td>00/00/2000</td>
                      <td>
                        <span className="icon-editar">✏️</span>
                        <span className="icon-eliminar">🗑️</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Nombre 2</td>
                      <td>nombre@empresa.com</td>
                      <td>Usuario Final</td>
                      <td>Activo</td>
                      <td>00/00/2000</td>
                      <td>
                        <span className="icon-editar">✏️</span>
                        <span className="icon-eliminar">🗑️</span>
                      </td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default gestionusuarios