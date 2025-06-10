import React from 'react';
import '../styles/Stock.css';
import { Link } from "react-router-dom";

function Informes() {
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
            <Link to="#">INFORMES</Link>
            <Link to="/gestionusuarios">GESTIÓN USUARIOS</Link>
            <Link to="/alertasinternas">ALERTAS INTERNAS</Link>
          </div>
        </div>
      </div>

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