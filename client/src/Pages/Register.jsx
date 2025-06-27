import { AuthContext } from "../context/AuthContext";

import { TextField, Button, Container, Select, MenuItem } from '@mui/material';
import React, { useState, useContext } from 'react';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [rol, setRol] = useState('');

  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(nombre, contraseña, rol);
  };

  return (
    <>
      <Container>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            fullWidth
            required
          />
          <Select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            fullWidth
            required
            displayEmpty
          >
            <MenuItem value="" disabled>Selecciona un rol</MenuItem>
            <MenuItem value="admin">Administrador</MenuItem>
            <MenuItem value="supervisor">Supervisor</MenuItem>
          </Select>
          <Button type="submit" variant="contained" color="primary">
            Registrar
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Register;
