import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { usuario, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="cargando">Verificando sesión...</div>;
  }

  if (!usuario) {
    console.warn("🚫 No hay sesión activa, redirigiendo a /login");
    return <Navigate to="/login" replace />;
  }

  if (role && usuario.rol !== role) {
    console.warn(`🔐 Acceso denegado. Rol necesario: ${role}, actual: ${usuario.rol}`);
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
