import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

const API_URL = 'http://localhost:5000/api/auth/';

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${API_URL}me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => setUsuario(response.data.usuario))
      .catch(() => logout());
    }
  }, []);

  const login = async (nombre, contraseña) => {
    try {
      const response = await axios.post(`${API_URL}login`, { nombre, contraseña });
      const token = response.data.token;
      localStorage.setItem('token', token);

      const userResponse = await axios.get(`${API_URL}me`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setUsuario(userResponse.data.usuario);
      navigate(userResponse.data.usuario.rol === 'admin' ? '/admin' : '/dashboard');
    } catch (err) {
      console.error("Error en login", err);
    }
  };

  const register = async (nombre, contraseña, rol) => {
    try {
      await axios.post(`${API_URL}register`, { nombre, contraseña, rol });
      navigate('/login');
    } catch (err) {
      console.error("Error al registrar usuario", err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUsuario(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
