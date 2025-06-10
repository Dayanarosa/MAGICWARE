import React from 'react';
import '../styles/Stock.css';
import { Link } from "react-router-dom";

function Alertasinternas() {
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
            <Link to="/gestionusuarios">GESTIÓN USUARIOS</Link>
            <Link to="#">ALERTAS INTERNAS</Link>
          </div>
        </div>
      </div>

      <div className="contenido">
        <div className="usuario-superior">
          <span className="rol">ADMINISTRADOR</span>
          <button className="cerrar-sesion">Cerrar sesión</button>
        </div>
        <div>
          <h1>ALERTAS INTERNAS</h1>
          <div className="tabla-contenedor">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Producto</th>
                  <th>Tipo Alerta</th>
                  <th>Reportado Por</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>00/00/0000</td>
                  <td>Producto</td>
                  <td>Producto dañado</td>
                  <td>Juan Perez</td>
                  <td>Pendiente</td>
                  <td>
                    <span className="icon-editar">✏️</span>
                    <span className="icon-eliminar">🗑️</span>
                  </td>
                </tr>
                <tr>
                  <td>00/00/0000</td>
                  <td>Producto</td>
                  <td>Producto agotado</td>
                  <td>Juan Perez</td>
                  <td>Pendiente</td>
                  <td>
                    <span className="icon-editar">✏️</span>
                    <span className="icon-eliminar">🗑️</span>
                  </td>
                </tr>
                <tr>
                  <td>00/00/0000</td>
                  <td>Producto</td>
                  <td>Producto incorrecto</td>
                  <td>Juan Perez</td>
                  <td>Pendiente</td>
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
  )
}

export default Alertasinternas
