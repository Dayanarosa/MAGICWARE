import React from 'react';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import Sidebaradm from '../components/sidebaradm';
import '../styles/styles.css';

const dataMasVendidos = [
    { name: '1', ventas: 720 },
    { name: '2', ventas: 680 },
    { name: '3', ventas: 500 },
    { name: '4', ventas: 300 },
];

const dataMenosVendidos = [
    { name: '1', ventas: 60 },
    { name: '2', ventas: 30 },
    { name: '3', ventas: 50 },
    { name: '4', ventas: 20 },
];

const coloresMas = ['#228B22', '#66BB66', '#99CC66', '#FFDD55'];
const coloresMenos = ['#B22222', '#FFD966', '#DC143C', '#CD853F'];

const mapaCalor = [
    { dia: 'LUNES', color: '#cc6666' },
    { dia: 'MARTES', color: '#f1c232' },
    { dia: 'MIÉRCOLES', color: '#e69138' },
    { dia: 'JUEVES', color: '#93c47d' },
    { dia: 'VIERNES', color: '#6aa84f' },
];

function Tendencias() {
    return (
        <div className="app">
            <Sidebaradm />
            <div className="content p-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <FaArrowLeft />
                        <h1 className="text-2xl font-bold">TENDENCIAS</h1>
                    </div>
                    <div className="finanzas-fecha">
                        <span>05 Marzo 2025</span>
                        <FaCalendarAlt />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="chart shadow-md p-4 bg-white rounded">
                        <h4>PRODUCTOS MÁS VENDIDOS</h4>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart layout="vertical" data={dataMasVendidos}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis type="category" dataKey="name" />
                                <Tooltip />
                                {dataMasVendidos.map((entry, index) => (
                                    <Bar
                                        key={index}
                                        dataKey="ventas"
                                        fill={coloresMas[index]}
                                        barSize={20}
                                        radius={[0, 8, 8, 0]}
                                    />
                                ))}
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart shadow-md p-4 bg-white rounded">
                        <h4>MAPA DE COLOR DE DEMANDA</h4>
                        <div className="mapa-calor-flex mt-4">
                            {mapaCalor.map((item, index) => (
                                <div className="mapa-calor-dia" key={index}>
                                    <div className="dia-titulo">{item.dia}</div>
                                    <div
                                        className="bloque-color"
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>




                    <div className="chart shadow-md p-4 bg-white rounded col-span-2">
                        <h4>PRODUCTOS MENOS VENDIDOS</h4>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart layout="vertical" data={dataMenosVendidos}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis type="category" dataKey="name" />
                                <Tooltip />
                                {dataMenosVendidos.map((entry, index) => (
                                    <Bar
                                        key={index}
                                        dataKey="ventas"
                                        fill={coloresMenos[index]}
                                        barSize={20}
                                        radius={[0, 8, 8, 0]}
                                    />
                                ))}
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tendencias;
