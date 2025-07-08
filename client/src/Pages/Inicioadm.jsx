import '../styles/styles.css';
import Sidebaradm from '../components/sidebaradm';
import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext'; // Importar el contexto 

function Inicioadm() {
  const { logout } = useAuth(); // Extraer la función logout

  return (
    <div className="app">
      <Sidebaradm />
      <div className="contenido contenido-inicio">
        <div className="usuario-superior">
          <span className="rol">Administrador</span>
        </div>

        <div className="texto-central-wrapper">
          <div className="texto-central">
            <h1>M A G I C W A R E</h1>
            <h4>Bienvenido(a) Isabell</h4>
          </div>
        </div>

        <div className="botonera">
          <Link to="/inventario" className="btn-opcion">
  <img src="/images/icono_inventario.png" alt="Inventario" />
  INVENTARIO
</Link>

          <Link to="/movimientos" className="btn-opcion">
            <img src="/images/icono_movimiento.png" alt="Movimientos" />
            MOVIMIENTOS
          </Link>

          <Link to="/finanzas" className="btn-opcion">
            <img src="/images/icono_finanzas.png" alt="Finanzas" />
            FINANZAS
          </Link>

          <Link to="/tendencias" className="btn-opcion">
            <img src="/images/icono-tendencias.webp" alt="Tendencias" />
            TENDENCIAS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Inicioadm;
