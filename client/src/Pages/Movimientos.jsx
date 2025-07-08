import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from 'recharts';
import '../styles/styles.css';
import Sidebaradm from '../components/sidebaradm';
import { useAuth } from '../context/AuthContext';

function Movimientos() {
  const entradas = [
    { nombre: '1', cantidad: 300 },
    { nombre: '2', cantidad: 450 },
    { nombre: '3', cantidad: 200 },
    { nombre: '4', cantidad: 600 }
  ];

  const salidas = [
    { nombre: 'A', cantidad: 150 },
    { nombre: 'B', cantidad: 500 },
    { nombre: 'C', cantidad: 400 },
    { nombre: 'D', cantidad: 300 }
  ];

  const historico = [
    { dia: 'Lunes', compras: 500, ventas: 2000 },
    { dia: 'Martes', compras: 1200, ventas: 1100 },
    { dia: 'Miércoles', compras: 2000, ventas: 1500 },
    { dia: 'Jueves', compras: 1700, ventas: 2500 },
    { dia: 'Viernes', compras: 700, ventas: 3000 },
    { dia: 'Sábado', compras: 300, ventas: 4000 }
  ];

  return (
    <div className="movimientos-container">
      <aside className="sidebar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
          <a href="#">INICIO</a>
          <a href="#">STOCK</a>
          <a href="#">INFORMES</a>
          <a href="#">GESTION USUARIOS</a>
          <a href="#">ALERTAS INTERNAS</a>
        </nav>
      </aside>

      <main className="contenido">
        <header className="header">
          <span className="back">← MOVIMIENTOS</span>
          <div className="fecha">05 Marzo 2025 📅</div>
        </header>

        <div className="graficos-superiores">
          <div className="grafico">
            <h4>ENTRADAS RECIENTES</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart layout="vertical" data={entradas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="nombre" type="category" />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#413ea0" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grafico">
            <h4>SALIDAS RECIENTES</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart layout="vertical" data={salidas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="nombre" type="category" />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grafico historico">
          <h4>HISTÓRICO DE COMPRA Y VENTAS</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historico}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ventas" stroke="#c2185b" />
              <Line type="monotone" dataKey="compras" stroke="#00bcd4" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

export default Movimientos;
