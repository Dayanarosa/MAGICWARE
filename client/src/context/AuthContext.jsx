// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  loginRequest,
  registerRequest,
  getProfile,
  getRoles,
} from '../api/authApi';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe estar dentro de AuthProvider');
  return context;
};

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [roles, setRoles] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // 🔐 Restaurar sesión si hay token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    let cancelado = false;

    getProfile(token)
      .then((res) => {
        if (!cancelado) {
          setUsuario(res.data);
          console.log('🔐 Sesión restaurada:', res.data);
        }
      })
      .catch((err) => {
        console.warn('⚠️ Token inválido o expirado.', err?.response?.data || err.message);
        localStorage.removeItem('token');
        if (!cancelado) {
          setUsuario(null);
          navigate('/login');
        }
      })
      .finally(() => {
        if (!cancelado) setLoading(false);
      });

    return () => {
      cancelado = true;
    };
  }, []);

  // 📌 Cargar roles desde backend
  useEffect(() => {
    getRoles()
      .then((res) => {
        setRoles(res.data);
        console.log('📌 Roles cargados:', res.data);
      })
      .catch((err) => {
        console.error('❌ Error al obtener roles:', err);
      });
  }, []);

  // ⏱️ Limpia errores automáticamente después de 5 segundos
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => setErrors({}), 5000);
            return () => clearTimeout(timer);
    }
  }, [errors]);

  // 🚪 Login
  const login = async (nombre, contraseña) => {
  try {
    const { data } = await loginRequest(nombre, contraseña);
    localStorage.setItem('token', data.token);

    const userRes = await getProfile(data.token);
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
      default:
        console.warn('⚠️ Rol no reconocido:', userRes.data.rol);
        navigate('/login');
    }

    setErrors({});
  } catch (err) {
    console.error('🛑 Error en login:', err?.response?.data || err.message);

    if (err?.response?.data?.errors) {
      setErrors(err.response.data.errors);
    } else if (err?.response?.data?.error) {
      const msg = err.response.data.error.toLowerCase();
      const fieldErrors = {};

      if (msg.includes('usuario')) fieldErrors.nombre = err.response.data.error;
      else if (msg.includes('contraseña')) fieldErrors.contraseña = err.response.data.error;
      else fieldErrors.general = err.response.data.error;

      setErrors(fieldErrors);
    } else {
      setErrors({ general: 'Credenciales inválidas' });
    }

    // 👇 Aseguramos que cargando se detenga si hay error
    setLoading(false);
    throw err;
  }
};


  // 📝 Registro
  const register = async (nombre, correo, contraseña, id_rol) => {
  try {
    await registerRequest(nombre, correo, contraseña, id_rol);
    navigate('/login');
    setErrors({});
  } catch (err) {
    console.error('🛑 Error al registrar usuario:', err?.response?.data || err.message);

    const responseErrors = err?.response?.data;

    // ✅ Si es un array: convertir a objeto simple sin campo específico
    if (Array.isArray(responseErrors)) {
      const mappedErrors = {};
      responseErrors.forEach((msg, index) => {
        if (msg.toLowerCase().includes('correo')) mappedErrors.correo = msg;
        else if (msg.toLowerCase().includes('contraseña')) mappedErrors.contraseña = msg;
        else if (msg.toLowerCase().includes('nombre')) mappedErrors.nombre = msg;
        else if (msg.toLowerCase().includes('rol')) mappedErrors.id_rol = msg;
        else mappedErrors[`error${index}`] = msg; // error general
      });
      setErrors(mappedErrors);
    }
    // ✅ Si es objeto con campos
    else if (responseErrors?.errors) {
      setErrors(responseErrors.errors);
    } else {
      setErrors({
        general: responseErrors?.message || 'Error al registrar usuario',
      });
    }

    throw err;
  }
};

  const logout = () => {
    localStorage.removeItem('token');
    setUsuario(null);
    setErrors({});
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loading,
        login,
        register,
        logout,
        roles,
        errors, // 👈 importante para mostrar errores en formularios
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
