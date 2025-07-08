import React from 'react';
import '../styles/styles.css';
import { Link } from "react-router-dom";
import Sidebar from '../components/sidebaradm';

function Stock() {
  return (
    <div className="app">
    <Sidebar />
      <div className="contenido">
        <div className="usuario-superior">
          <span className="rol">ADMINISTRADOR</span>
          <button className="cerrar-sesion">Cerrar sesión</button>
        </div>

        <div className="texto-central">
          <div className="stock-container">
            <h1>STOCK</h1>
            <div className="stock-header">
              <Link to="/agregarproductos" className="btn-agregar">
                AGREGAR PRODUCTOS <span>＋</span>
              </Link>
              <input type="text" placeholder="BUSCAR PRODUCTOS" className="input-buscar" />
              <button className="btn-proveedores">
                PROVEEDORES <span>▼</span>
              </button>
            </div>

            <div className="tabla-contenedor">
              <table>
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Cantidad</th>
                    <th>Ubicación</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0001</td>
                    <td>Producto 1</td>
                    <td>Categoría A</td>
                    <td>100</td>
                    <td>Estante A</td>
                    <td><span className="icon-verde">✔</span></td>
                    <td>
                      <span className="icon-editar">✏️</span>
                      <span className="icon-eliminar">🗑️</span>
                    </td>
                  </tr>
                  <tr>
                    <td>0002</td>
                    <td>Producto 2</td>
                    <td>Categoría B</td>
                    <td>50</td>
                    <td>Estante B</td>
                    <td><span className="icon-warning">⚠️</span></td>
                    <td>
                      <span className="icon-editar">✏️</span>
                      <span className="icon-eliminar">🗑️</span>
                    </td>
                  </tr>
                  <tr>
                    <td>0003</td>
                    <td>Producto 3</td>
                    <td>Categoría C</td>
                    <td>0</td>
                    <td>Estante C</td>
                    <td><span className="icon-rojo">❌</span></td>
                    <td>
                      <span className="icon-editar">✏️</span>
                      <span className="icon-eliminar">🗑️</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stock;
