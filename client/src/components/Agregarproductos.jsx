import React from 'react'
import '../styles/Stock.css';
import { Link } from "react-router-dom";

function agregarproductos() {
  return (
   <div className="contenedor-agregar-producto">
      <div className="header">
        <div>
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
         
      </table>
    </div>
    </div>
      )
 
}

export default agregarproductos
