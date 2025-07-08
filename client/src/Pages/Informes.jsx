import React from 'react';
import '../styles/Stock.css';
import { FaCalendarAlt, FaClipboardList, FaFilePdf } from 'react-icons/fa';
import { BiBox, BiHistory, BiMap, BiUser } from 'react-icons/bi';
import Sidebar from "../components/sidebaradm";

function Informes() {
  return (
    <div className="app">
      <Sidebar />
      <div className="contenido p-10 relative">
        <div className="usuario-superior">
          <span className="rol">ADMINISTRADOR</span>
          <button className="cerrar-sesion">Cerrar sesión</button>
        </div>

        <h1 className="text-2xl font-bold mb-8">INFORMES</h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-4">
            <button className="btn-opcion-informe">
              <FaClipboardList size={20} />
              REPORTE GENERAL DE STOCK
            </button>
            <button className="btn-opcion-informe">
              <BiBox size={20} />
              PRODUCTOS CON STOCK BAJO
            </button>
            <button className="btn-opcion-informe">
              <BiHistory size={20} />
              HISTORIAL DE PRODUCTOS
            </button>
            <button className="btn-opcion-informe">
              <BiMap size={20} />
              UBICACIÓN DE PRODUCTOS
            </button>
            <button className="btn-opcion-informe">
              <BiUser size={20} />
              USUARIOS REGISTRADOS
            </button>
          </div>

          <div className="flex flex-col gap-4 col-span-2">
            <div className="flex gap-4 mb-2">
              <div className="input-fecha">
                <label>Fecha desde</label>
                <div className="input-icono">
                  <input type="text" placeholder="00/00/0000" />
                  <FaCalendarAlt />
                </div>
              </div>
              <div className="input-fecha">
                <label>Fecha hasta</label>
                <div className="input-icono">
                  <input type="text" placeholder="00/00/0000" />
                  <FaCalendarAlt />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="btn-generar">
                <FaClipboardList />
                Generar informes
              </button>
              <button className="btn-generar">
                <FaFilePdf />
                Exportar PDF
              </button>
            </div>

            <div className="reporte-preview">
              <p>VISTA PREVIA DEL REPORTE GENERADO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informes;
