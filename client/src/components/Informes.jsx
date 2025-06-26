import React from 'react';

import '../styles/Stock.css';

import '../styles/Inicio.css';

import { Link } from "react-router-dom";
import Sidebar from "./sidebar"

function Informes() {
  return (
    <div className="app">
      <Sidebar />
      <div className="contenido">
        <div className="usuario-superior">
          <span className="rol">ADMINISTRADOR</span>
          <button className="cerrar-sesion">Cerrar sesión</button>
        </div>
        <h1>INFORMES</h1>



      </div>
    </div>)
}

export default Informes