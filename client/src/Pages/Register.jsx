import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import {
  TextField,
  Button,
  Container,
  Select,
  MenuItem,
  Box,
  InputLabel,
  FormControl,
  FormHelperText,
  Typography
} from '@mui/material';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [idrol, setRol] = useState('');
  const { register, roles, errors } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(nombre, correo, contraseña, idrol);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Registro de Usuario</Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
            required
            error={!!errors.nombre}
            helperText={errors.nombre}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Correo electrónico"
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            fullWidth
            required
            error={!!errors.correo}
            helperText={errors.correo}
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
            error={!!errors.contraseña}
            helperText={errors.contraseña}
          />
        </Box>

        <Box mb={2}>
          <FormControl fullWidth required error={!!errors.id_rol}>
            <InputLabel>Rol</InputLabel>
            <Select
              value={idrol}
              onChange={(e) => setRol(e.target.value)}
              label="Rol"
            >
              {roles.map((rol) => (
                <MenuItem key={rol.id_rol} value={rol.id_rol}>
                  {rol.nombre_rol}
                </MenuItem>
              ))}
            </Select>
            {errors.id_rol && <FormHelperText>{errors.id_rol}</FormHelperText>}
          </FormControl>
        </Box>

        {/* 🔴 Error general si existe */}
        {errors.general && (
          <Box mb={2}>
            <Typography color="error" align="center">
              {errors.general}
            </Typography>
          </Box>
        )}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Registrar
        </Button>
      </form>
    </Container>
  );
};

export default Register;
