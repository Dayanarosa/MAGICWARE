import {Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import AdminPanel from './Pages/Adminpanel';



const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard " element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminPanel />
        </ProtectedRoute>
      } />
      </Routes>
    </>
  )
}

export default App
