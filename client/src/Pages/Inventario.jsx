import React from 'react';
import '../styles/styles.css';
import Sidebaradm from '../components/sidebaradm';
import { useAuth } from '../context/AuthContext';

function Inventario() {
  const { usuario } = useAuth();

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

          <div className="stock-box">
            <h3>STOCK DISPONIBLE</h3>
            <p className="stock-total">101.000</p>
            <p className="stock-usd">$30,300,000 USD</p>
            <span className="stock-icon">📈</span>
          </div>

          <div className="chart productos-mas-almacenados">
            <h4>PRODUCTOS MÁS ALMACENADOS</h4>
            {/* Aquí se puede colocar un gráfico de barras */}
          </div>

          <div className="chart distribucion-stock">
            <h4>DISTRIBUCIÓN DE STOCK</h4>
            <div className="stock-letras">
              <span>a<br/>20%</span>
              <span>b<br/>5%</span>
              <span>c<br/>30%</span>
              <span>d<br/>15%</span>
              <span>e<br/>15%</span>
              <span>f<br/>11%</span>
              <span>g<br/>4%</span>
            </div>
          </div>

          <div className="chart fluctuacion-stock">
            <h4>FLUCTUACIÓN DE STOCK</h4>
            {/* Aquí irá una línea temporal */}
          </div>

          <div className="chart bajo-stock">
            <h4>BAJO STOCK</h4>
            {/* Otra gráfica de barras horizontal */}
          </div>

          <div className="chart tiempo-reposicion">
            <h4>TIEMPO DE REPOSICIÓN</h4>
            <div className="reposicion-circles">
              <div className="circle red">+15<br/>DÍAS</div>
              <div className="circle orange">10<br/>DÍAS</div>
              <div className="circle yellow">3<br/>DÍAS</div>
              <div className="circle green">1<br/>DÍA</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Inventario;
