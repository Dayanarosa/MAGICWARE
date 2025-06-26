import React from "react";
import "../styles/Stock.css";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar"



function AgregarProductos() {
  return (
    <div className="app">
            <Sidebar />
      <div className="header">
        <Link to="/stock" className="volver">&#8592;</Link>
        <h2>AGREGAR PRODUCTOS</h2>
      </div>  

      <table className="tabla-producto">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Ubicación</th>
            <th>Proveedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" placeholder="código" /></td>
            <td><input type="text" placeholder="nombre" /></td>
            <td><input type="text" placeholder="categoría" /></td>
            <td><input type="number" placeholder="cantidad" /></td>
            <td><input type="text" placeholder="ubicación" /></td>
            <td><input type="text" placeholder="Proveedor" /></td>
            <td className="acciones">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AgregarProductos;
