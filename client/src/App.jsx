import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./index.css"
import Inicio from './components/Inicio';
import Stock from './components/Stock';
//import Gestionusuarios from './components/Gestionusuarios';
import Informes from './components/Informes';
import Notificaciones from './components/Notificaciones';
import Agregarproductos from './components/Agregarproductos';
import Registrarusuario from './components/Registrarusuario';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/stock" element={<Stock />} />
        
        <Route path="/informes" element={<Informes />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/agregarproductos" element={<Agregarproductos />} />
        <Route path="/registrarusuario" element={<Registrarusuario />} />
      </Routes>
    </Router>
  );
}

export default App;
