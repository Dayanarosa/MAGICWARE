import React from 'react';
import {
  FaArrowLeft,
  FaSearch,
  FaCalendarAlt
} from 'react-icons/fa';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import Sidebaradm from '../components/sidebaradm';
import '../styles/styles.css';

const dataPie = [
  { name: '2', value: 40 },
  { name: '1', value: 25 },
  { name: '4', value: 19 },
  { name: '3', value: 17 },
];

const COLORS = ['#006400', '#66BB66', '#99CC99', '#B2D8B2'];

const dataBar = [
  { name: 'Lunes', Almacenamiento: 2400, Compras: 400, Distribución: 800 },
  { name: 'Martes', Almacenamiento: 2800, Compras: 700, Distribución: 950 },
  { name: 'Miércoles', Almacenamiento: 2600, Compras: 500, Distribución: 1000 },
  { name: 'Jueves', Almacenamiento: 3000, Compras: 1200, Distribución: 1100 },
  { name: 'Viernes', Almacenamiento: 3500, Compras: 1300, Distribución: 1150 },
  { name: 'Sábado', Almacenamiento: 2900, Compras: 1000, Distribución: 1300 },
];

function Finanzas() {
  return (
    <div className="app">
      <Sidebaradm />
      <div className="content">
        <div className="finanzas-header">
          <div className="flex items-center gap-2">
            <FaArrowLeft />
            <h1>FINANZAS</h1>
          </div>
          <div className="finanzas-fecha">
            <span>05 Marzo 2025</span>
            <FaCalendarAlt />
          </div>
        </div>

        <div className="finanzas-grid">
          <div className="finanzas-card">
            <h3>INGRESOS GENERADOS</h3>
            <p>$3.000 USD</p>
          </div>

          <div className="finanzas-card">
            <h3>GANANCIA POR PRODUCTO</h3>
            <div className="search-wrapper">
              <input type="text" placeholder="Buscar" />
              <FaSearch />
            </div>
            <p className="producto-link">Producto</p>
            <p>$500 USD</p>
          </div>

          <div className="finanzas-card finanzas-pie">
            <h3>PRODUCTOS MÁS RENTABLES</h3>
            <ResponsiveContainer width="100%" height={120}>
              <PieChart>
                <Pie data={dataPie} dataKey="value" nameKey="name" outerRadius={50}>
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="finanzas-bar">
          <h3>GASTOS Y COSTOS DE INVENTARIOS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Almacenamiento" fill="#ff4d4d" />
              <Bar dataKey="Compras" fill="#00bfff" />
              <Bar dataKey="Distribución" fill="#ffd700" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Finanzas;
