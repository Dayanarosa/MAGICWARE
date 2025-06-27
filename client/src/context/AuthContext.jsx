import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

const API_URL = 'http://localhost:5000/api/auth/';

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  
 useEffect(() => {
  let cancelado = false;
  const token = localStorage.getItem('token');

  if (token) {
    axios
      .get(`${API_URL}me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        if (!cancelado) setUsuario(res.data);
      })
      .catch(() => {
        if (!cancelado) logout();
      })
      .finally(() => {
        if (!cancelado) setLoading(false);
      });
  } else {
    setLoading(false);
  }

  return () => {
    cancelado = true;
  };
}, []);

  const login = async (nombre, contraseña) => {
    try {
      const { data } = await axios.post(`${API_URL}login`, { nombre, contraseña });
      localStorage.setItem('token', data.token);

      const userRes = await axios.get(`${API_URL}me`, {
        headers: { Authorization: `Bearer ${data.token}` }
      });

      setUsuario(userRes.data);

      
       switch (userRes.data.rol) {
  case 'Administrador':
    navigate('/inicio');
    break;

        case 'Supervisor':
          navigate('/supervisor');
          break;
        case 'Empleado':
          navigate('/empleado');
          break;
        default:
          navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error en login', err);
    }
  };

  const register = async (nombre, correo, contraseña, rol) => {
    try {
      await axios.post(`${API_URL}register`, { nombre, correo, contraseña, rol });
      navigate('/login');
    } catch (err) {
      console.error('Error al registrar usuario', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUsuario(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ usuario, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
