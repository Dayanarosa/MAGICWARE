import React from 'react';
import '../styles/Stock.css';
import { Link } from "react-router-dom";
import Sidebar from '../components/sidebar';

function Notificaciones() {
  return (
    <div className="app">
      <Sidebar />
      <div className="contenido">
        <div className="usuario-superior">
          <span className="rol">ADMINISTRADOR</span>
          <button className="cerrar-sesion">Cerrar sesión</button>
        </div>
        <div>
          <h1>NOTIFICACIONES</h1>
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

export default Notificaciones
