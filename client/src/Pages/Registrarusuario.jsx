import React from 'react';
import '../styles/Stock.css';
import { Link } from "react-router-dom";
import Sidebar from '../components/sidebar';

function Registrarusuario() {
  return (
    <div className="main-container">
      <Sidebar />

      <div className="content">
        <Link to="/usuarios" className="back-link">
          <FaArrowLeft /> REGISTRAR USUARIOS
        </Link>

        <div className="form-container">
          <h2>REGISTRA UN NUEVO USUARIO</h2>

          <input type="text" placeholder="Nombre" className="input-field" />
          <input type="email" placeholder="Correo electrónico" className="input-field" />
          <input type="password" placeholder="Contraseña" className="input-field" />
          <input type="password" placeholder="Contraseña" className="input-field" />

          <div className="role-dropdown">
            <button className="role-button">
              Rol <span className="arrow">&#9660;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrarusuario;