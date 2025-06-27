import React, { useState, useContext } from 'react';
import '../styles/styles.css';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const { login } = useContext(AuthContext);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    try {
      await login(nombre, contraseña);
      
    } catch (err) {
      setError('Credenciales inválidas o error en el servidor');
    } finally {
      setCargando(false);
    }
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit" disabled={cargando}>
            {cargando ? 'Ingresando...' : 'INGRESAR'}
          </button>
        </form>
      </div>

      <div className="login-right">
        <h1>MAGICWARE</h1>
      </div>
    </div>
  );
}

export default Login;
