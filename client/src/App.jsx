import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Páginas públicas
import Login from './Pages/Login';
import Register from './Pages/Register';

// Páginas protegidas (por rol)
import Dashboard from './Pages/Dashboard';               // Empleado
import Inicio from './Pages/Inicio';                     // Supervisor
import Stock from './Pages/Stock';                       // Administrador
import Notificaciones from './Pages/Notificaciones';     // Administrador
import Inicioadm from './Pages/Inicioadm';               // Administrador
import Gestionusuarios from './Pages/Gestionusuarios';   // Administrador
import Informes from './Pages/Informes';                 // Supervisor
import Agregarproductos from './Pages/Agregarproductos'; // Administrador
import Registrarusuario from './Pages/Registrarusuario'; // Administrador
import Inventario from './Pages/Inventario';             // Administrador
import Movimientos from './Pages/Movimientos';           // Administrador
import Finanzas from './Pages/Finanzas';
import Tendencias from './Pages/Tendencias';




const App = () => {
  const { usuario } = useContext(AuthContext);

  const redireccionSegunRol = () => {
    if (!usuario) return <Navigate to="/login" replace />;
    if (usuario.rol === 'Administrador') return <Navigate to="/admin" replace />;
    if (usuario.rol === 'Supervisor') return <Navigate to="/inicio" replace />;
    if (usuario.rol === 'Empleado') return <Navigate to="/dashboard" replace />;
    return <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      {/* Ruta raíz: redirige automáticamente según rol */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            {redireccionSegunRol()}
          </ProtectedRoute>
        }
      />

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      {/*<Route path="/register" element={<Register />} />*/}

      {/* Rutas protegidas por rol */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="Administrador">
            <Inicioadm />
          </ProtectedRoute>
        }
      />
     <Route
  path="/gestionusuarios"
  element={
    <ProtectedRoute role={["Administrador", "Supervisor"]}>
      <Gestionusuarios />
    </ProtectedRoute>
  }
/>


      
      <Route
      
        path="/register"
        element={
          <ProtectedRoute role="Administrador">
            <Register />
          </ProtectedRoute>
        }
      />

      <Route
        path="/agregarproductos"
        element={
          <ProtectedRoute role="Administrador">
            <Agregarproductos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/registrarusuario"
        element={
          <ProtectedRoute role="Administrador">
            <Registrarusuario />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventario"
        element={
          <ProtectedRoute role="Administrador">
            <Inventario />
          </ProtectedRoute>
        }
      />
      <Route
        path="/stock"
        element={
          <ProtectedRoute role="Administrador">
            <Stock />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notificaciones"
        element={
          <ProtectedRoute role="Administrador">
            <Notificaciones />
          </ProtectedRoute>
        }
      />

      <Route
        path="/inicio"
        element={
          <ProtectedRoute role="Supervisor">
            <Inicio />
          </ProtectedRoute>
        }
      />
      <Route
        path="/informes"
        element={
          <ProtectedRoute role="Administrador">
            <Informes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="Empleado">
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      <Route path="/movimientos" element={<Movimientos />} />
      <Route path="/finanzas" element={<Finanzas />} />
      <Route path="/tendencias" element={<Tendencias />} />




      

      {/* Fallback: redirige siempre a la raíz */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
