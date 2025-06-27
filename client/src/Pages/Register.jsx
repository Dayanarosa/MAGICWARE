import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import {
  TextField,
  Button,
  Container,
  Select,
  MenuItem,
  Box
} from '@mui/material';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [rol, setRol] = useState('');

  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(nombre, correo, contraseña, rol);
  };

  return (
    <Container maxWidth="sm">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
            required
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Correo electrónico"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            fullWidth
            required
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Contraseña"
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            fullWidth
            required
          />
        </Box>

        <Box mb={2}>
          <Select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            fullWidth
            required
            displayEmpty
          >
            <MenuItem value="" disabled>Selecciona un rol</MenuItem>
            <MenuItem value="Administrador">Administrador</MenuItem>
            <MenuItem value="Supervisor">Supervisor</MenuItem>
            <MenuItem value="Empleado">Empleado</MenuItem>
          </Select>
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Registrar
        </Button>
      </form>
    </Container>
  );
};

export default Register;
