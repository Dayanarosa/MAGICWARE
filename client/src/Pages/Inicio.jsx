import '../styles/styles.css';
import Sidebar from '../components/sidebar';
import { useAuth } from '../context/AuthContext'; 

function Inicio() {
  const { logout } = useAuth(); 

  return (
    <div className="app">
      <Sidebar />
      <div className="contenido contenido-inicio">
        <div className="usuario-superior">
          <span className="rol">Supervisor</span>
        </div>

        <div className="texto-central-wrapper">
          <div className="texto-central">
            <h1>M A G I C W A R E</h1>
            <h4>Bienvenido(a) NO</h4>
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
