import React, { useState, useContext } from 'react';
import '../styles/styles.css';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const manejarEnvio = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <form onSubmit={manejarEnvio} className="login-form">
          <div className="icono-usuario">👤</div>
          <h2>INICIO DE SESIÓN</h2>

          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
