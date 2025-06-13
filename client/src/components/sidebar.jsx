import React from 'react'
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <div>
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
            <Link to="/notificaciones">NOTIFICACIONES</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sidebar
