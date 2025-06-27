import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import AdminPanel from './Pages/Adminpanel';
import Inicio from './Pages/Inicio';
import Stock from './Pages/Stock';
import Gestionusuarios from './Pages/Gestionusuarios';
import Informes from './Pages/Informes';
import Notificaciones from './Pages/Notificaciones';
import Agregarproductos from './Pages/Agregarproductos';
import Registrarusuario from './Pages/Registrarusuario';


import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
     

      {/* Protegidas */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="Administrador">
            <AdminPanel />
          </ProtectedRoute>
        }
      />

      <Route
        path="/inicio"
        element={
          <ProtectedRoute>
            <Inicio />
          </ProtectedRoute>
        }
      />

      <Route
        path="/stock"
        element={
          <ProtectedRoute>
            <Stock />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gestionusuarios"
        element={
          <ProtectedRoute role="Administrador">
            <Gestionusuarios />
          </ProtectedRoute>
        }
      />

      <Route
        path="/informes"
        element={
          <ProtectedRoute role="Supervisor">
            <Informes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notificaciones"
        element={
          <ProtectedRoute>
            <Notificaciones />
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
    </Routes>
  );
};

export default App;
