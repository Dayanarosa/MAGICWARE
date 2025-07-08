import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  LineChart, Line, Legend, ResponsiveContainer
} from 'recharts';
import { FaCalendarAlt } from 'react-icons/fa';
import Sidebaradm from '../components/sidebaradm';
import { useAuth } from '../context/AuthContext';
import '../styles/styles.css';

const entradas = [
  { name: '1', cantidad: 300 },
  { name: '2', cantidad: 400 },
  { name: '3', cantidad: 200 },
  { name: '4', cantidad: 600 }
];

const salidas = [
  { name: 'A', cantidad: 250 },
  { name: 'B', cantidad: 500 },
  { name: 'C', cantidad: 450 },
  { name: 'D', cantidad: 300 }
];

const historico = [
  { dia: 'Lunes', ventas: 2000, compras: 500 },
  { dia: 'Martes', ventas: 1000, compras: 1500 },
  { dia: 'Miércoles', ventas: 1800, compras: 1800 },
  { dia: 'Jueves', ventas: 2500, compras: 900 },
  { dia: 'Viernes', ventas: 3500, compras: 400 },
  { dia: 'Sábado', ventas: 4000, compras: 600 }
];

function Movimientos() {
  const { usuario } = useAuth();

  return (
    <div className="app">
      <Sidebaradm />

      <div className="contenido">
        {/* Encabezado superior */}
        <div className="movimientos-header">
          <h2>← MOVIMIENTOS</h2>
          <div className="movimientos-fecha">
            <span style={{ marginRight: '8px' }}>05 Marzo 2025</span>
            <FaCalendarAlt />
          </div>
        </div>

        {/* Gráficos Entradas/Salidas */}
        <div className="movimientos-graficas">
          <div className="chart" style={{ flex: 1 }}>
            <h4>ENTRADAS RECIENTES</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart layout="vertical" data={entradas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#2B3BBD" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart" style={{ flex: 1 }}>
            <h4>SALIDAS RECIENTES</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart layout="vertical" data={salidas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#7588F0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Histórico de compra y venta */}
        <div className="chart movimientos-historico">
          <h4>HISTÓRICO DE COMPRA Y VENTAS</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={historico}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ventas" stroke="#C348A2" name="Ventas" />
              <Line type="monotone" dataKey="compras" stroke="#5CD1E5" name="Compras" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Movimientos;
