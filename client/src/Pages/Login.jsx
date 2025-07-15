import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [cargando, setCargando] = useState(false);
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const { login, errors } = useContext(AuthContext);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);
    try {
      await login(nombre, contraseña);
    } catch (err) {
      // Error ya manejado por el contexto
    } finally {
      setCargando(false);
    }
  };

  const toggleVisibilidad = () => {
    setMostrarContraseña((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <form onSubmit={manejarEnvio} className="login-form">
          <div className="icono-usuario">👤</div>
          <h2>INICIO DE SESIÓN</h2>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="input-text"
            />
            {errors?.nombre && (
              <p className="error-text">{errors.nombre}</p>
            )}
          </div>

          <div className="input-wrapper password-wrapper">
            <input
              type={mostrarContraseña ? 'text' : 'password'}
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
              className="input-text"
            />
            <span
              className="toggle-password"
              onClick={toggleVisibilidad}
              title={mostrarContraseña ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {mostrarContraseña ? '🙈' : '👁️'}
            </span>
            {errors?.contraseña && (
              <p className="error-text">{errors.contraseña}</p>
            )}
          </div>

          {errors?.general && (
            <p className="error-text">{errors.general}</p>
          )}

          <button type="submit" disabled={cargando}>
            {cargando && Object.keys(errors).length === 0 ? 'Ingresando...' : 'INGRESAR'}
          </button>

          <Link to="/registro" className="registro-link">
            ¿No tienes cuenta? Regístrate aquí
          </Link>
        </form>
      </div>

      <div className="login-right">
        <h1>MAGICWARE</h1>
      </div>
    </div>
  );
}

export default Login;
