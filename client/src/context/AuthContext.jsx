import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Crear el contexto
export const AuthContext = createContext();

// URL base de tu API
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
          if (!cancelado) {
            setUsuario(res.data);
            console.log('🔐 Sesión restaurada:', res.data);
          }
        })
        .catch(error => {
          console.warn('⚠️ Token inválido o expirado. Cerrando sesión.', error?.response?.data || error.message);
          if (!cancelado) {
            localStorage.removeItem('token');
            setUsuario(null);
            window.location.href = '/login';
          }
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
      console.log('✅ Login exitoso:', userRes.data);

      switch (userRes.data.rol) {
        case 'Administrador':
          navigate('/admin');
          break;
        case 'Supervisor':
          navigate('/inicio');
          break;
        case 'Empleado':
          navigate('/empleado');
          break;
       
      }
    } catch (err) {
      console.error('🛑 Error en login:', err?.response?.data || err.message);
      throw err;
    }
  };

  const register = async (nombre, correo, contraseña, rol) => {
    try {
      await axios.post(`${API_URL}register`, { nombre, correo, contraseña, rol });
      navigate('/login');
    } catch (err) {
      console.error('🛑 Error al registrar usuario:', err?.response?.data || err.message);
      throw err;
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

// Hook personalizado
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
