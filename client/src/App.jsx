import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './components/Inicio';
import Stock from './components/Stock';
import Gestionusuarios from './components/Gestionusuarios';
import Informes from './components/Informes';
import Alertasinternas from './components/Alertasinternas';
import Agregarproductos from './components/Agregarproductos';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/gestionusuarios" element={<Gestionusuarios />} />
        <Route path="/informes" element={<Informes />} />
        <Route path="/alertasinternas" element={<Alertasinternas />} />
        <Route path="/agregarproductos" element={<Agregarproductos />} />


      </Routes>
    </Router>
  );
}

export default App;
