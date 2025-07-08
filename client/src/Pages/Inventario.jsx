import React from 'react';
import '../styles/styles.css';
import Sidebaradm from '../components/sidebaradm';
import { useAuth } from '../context/AuthContext';

// Recharts
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

function Inventario() {
  const { usuario } = useAuth();

  // Datos para los gráficos
  const productosAlmacenados = [
    { nombre: 'Producto A', cantidad: 400 },
    { nombre: 'Producto B', cantidad: 300 },
    { nombre: 'Producto C', cantidad: 200 },
    { nombre: 'Producto D', cantidad: 278 },
    { nombre: 'Producto E', cantidad: 189 }
  ];

  const distribucionStock = [
    { name: 'A', value: 20 },
    { name: 'B', value: 5 },
    { name: 'C', value: 30 },
    { name: 'D', value: 15 },
    { name: 'E', value: 15 },
    { name: 'F', value: 11 },
    { name: 'G', value: 4 },
  ];

  const fluctuacionStock = [
    { fecha: 'Ene', stock: 100 },
    { fecha: 'Feb', stock: 120 },
    { fecha: 'Mar', stock: 110 },
    { fecha: 'Abr', stock: 150 },
    { fecha: 'May', stock: 90 },
    { fecha: 'Jun', stock: 130 }
  ];

  const bajoStock = [
    { nombre: 'Producto X', cantidad: 5 },
    { nombre: 'Producto Y', cantidad: 3 },
    { nombre: 'Producto Z', cantidad: 2 },
    { nombre: 'Producto W', cantidad: 1 }
  ];

  const COLORS = ['#8884d8', '#8dd1e1', '#ffc658', '#ff8042', '#82ca9d', '#a4de6c', '#d0ed57'];

  return (
    <div className="app">
      <Sidebaradm />
      <div className="contenido contenido-inicio">
        <div className="usuario-superior">
          <span className="rol">ADMINISTRADOR</span>
        </div>

        <div className="texto-central-wrapper">
          <div className="texto-central">
            <h1>INVENTARIO</h1>
            <h4>Bienvenido(a) {usuario?.nombre || 'Usuario'}</h4>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* STOCK DISPONIBLE */}
          <div className="stock-box">
            <h3>STOCK DISPONIBLE</h3>
            <p className="stock-total">101.000</p>
            <p className="stock-usd">$30,300,000 USD</p>
            <span className="stock-icon">📈</span>
          </div>

          {/* PRODUCTOS MÁS ALMACENADOS */}
          <div className="chart productos-mas-almacenados">
            <h4>PRODUCTOS MÁS ALMACENADOS</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={productosAlmacenados}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nombre" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* DISTRIBUCIÓN DE STOCK */}
          <div className="chart distribucion-stock">
            <h4>DISTRIBUCIÓN DE STOCK</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={distribucionStock} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
                  {distribucionStock.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* FLUCTUACIÓN DE STOCK */}
          <div className="chart fluctuacion-stock">
            <h4>FLUCTUACIÓN DE STOCK</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={fluctuacionStock}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="stock" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* BAJO STOCK */}
          <div className="chart bajo-stock">
            <h4>BAJO STOCK</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart layout="vertical" data={bajoStock}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="nombre" />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#ff6666" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* TIEMPO DE REPOSICIÓN */}
          <div className="chart tiempo-reposicion">
            <h4>TIEMPO DE REPOSICIÓN</h4>
            <div className="reposicion-circles">
              <div className="circle red">+15<br />DÍAS</div>
              <div className="circle orange">10<br />DÍAS</div>
              <div className="circle yellow">3<br />DÍAS</div>
              <div className="circle green">1<br />DÍA</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Inventario;
