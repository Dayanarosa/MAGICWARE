import '../styles/Inicio.css';
import { Link } from 'react-router-dom';


function Inicio() {
  return (
    <div className="app">
      <div className="sidebar">
        <div>
          <div className="logo">
            <img src="/images/MG_LOGO.png" alt="Logo de la empresa" />
          </div>

          <div className="menu">
            <Link to="#">INICIO</Link>
            <Link to="/stock">STOCK</Link>
            <Link to="/informes">INFORMES</Link>
            <Link to="/gestionusuarios">GESTIÓN USUARIOS</Link>
            <Link to="/alertasinternas">ALERTAS INTERNAS</Link>
            <Link to="/alertasinternas">ALERTAS INTERNAS</Link>
          </div>
        </div>
      </div>

      <div className="contenido">
        <div className="usuario-superior">
          <span className="rol">ADMINISTRADOR</span>
          <button className="cerrar-sesion">Cerrar sesión</button>
        </div>

        <div className="texto-central-wrapper">
          <div className="texto-central">
            <h1>MAGICWARE</h1>
            <h4>Bienvenido(a) Isabell</h4>
          </div>
        </div>


        <div className="botonera">
          <a href="#" className="btn-opcion">
            <img src="/images/icono_inventario.png" alt="" />
            INVENTARIO
          </a>
          <a href="#" className="btn-opcion">
            <img src="/images/icono_movimiento.png" alt="" />
            MOVIMIENTOS
          </a>
          <a href="#" className="btn-opcion">
            <img src="/images/icono_finanzas.png" alt="" />
            FINANZAS
          </a>
          <a href="#" className="btn-opcion">
            <img src="/images/icono-tendencias.webp" alt="" />
            TENDENCIAS
          </a>
        </div>
      </div>
    </div>
  );
}

export default Inicio;


