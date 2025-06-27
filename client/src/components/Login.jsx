import React, { useState } from 'react';
import '../styles/styles.css';
import { Link } from "react-router-dom";

function Login() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Correo: ${correo} - Contraseña: ${clave}`);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <form onSubmit={manejarEnvio} className="login-form">
          <div className="icono-usuario">👤</div>
          <h2>INICIO DE SESIÓN</h2>

          <input
            type="email"
            placeholder="correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />

          <button type="submit">INGRESAR</button>
        </form>
      </div>

      <div className="login-right">
        <h1>MAGICWARE</h1>
      </div>
    </div>
  );
}

export default Login;
