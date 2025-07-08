import React from 'react';
import { FaArrowLeft, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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
      <div className="content p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FaArrowLeft />
            <h1 className="text-2xl font-bold">FINANZAS</h1>
          </div>
          <div className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded">
            <span>05 Marzo 2025</span>
            <FaCalendarAlt />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="shadow-md p-4 bg-white rounded">
            <h3 className="text-sm text-gray-500">INGRESOS GENERADOS</h3>
            <p className="text-2xl font-semibold">$3.000 USD</p>
          </div>

          <div className="shadow-md p-4 bg-white rounded">
            <h3 className="text-sm text-gray-500">GANANCIA POR PRODUCTO</h3>
            <div className="flex items-center gap-2 mt-2">
              <input type="text" placeholder="Buscar" className="border px-2 py-1 text-sm rounded w-full" />
              <FaSearch />
            </div>
            <p className="mt-2 text-blue-700 underline cursor-pointer">Producto</p>
            <p className="text-xl font-semibold">$500 USD</p>
          </div>

          <div className="shadow-md p-4 bg-white rounded text-center">
            <h3 className="text-sm text-gray-500 mb-2">PRODUCTOS MÁS RENTABLES</h3>
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

        <div className="shadow-md p-4 bg-white rounded">
          <h3 className="text-center font-semibold mb-2">GASTOS Y COSTOS DE INVENTARIOS</h3>
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
