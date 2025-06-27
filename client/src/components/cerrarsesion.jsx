import React from "react";
import { useAuth } from "../context/AuthContext";

function Cerrarsesion() {
  const { logout } = useAuth();

  return (
    <button onClick={logout}>
      Cerrar Sesión
    </button>
  );
}

export default Cerrarsesion;

