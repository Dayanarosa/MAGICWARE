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
  Typography,
  FormHelperText
} from '@mui/material';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [idrol, setRol] = useState('');
  const [cargando, setCargando] = useState(false);

  const { register, roles, errors } = useContext(AuthContext);

  // Estado local para errores por campo
  const [fieldErrors, setFieldErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setFieldErrors({}); // Reset errores por campo

    try {
      await register(nombre, correo, contraseña, Number(idrol));
    } catch (err) {
      // Procesar errores si vienen en array
      const errorData = err?.response?.data;
      if (Array.isArray(errorData)) {
        const temp = {};
        for (const msg of errorData) {
          if (msg.toLowerCase().includes('nombre')) temp.nombre = msg;
          else if (msg.toLowerCase().includes('correo')) temp.correo = msg;
          else if (msg.toLowerCase().includes('contraseña')) temp.contraseña = msg;
          else if (msg.toLowerCase().includes('rol')) temp.idrol = msg;
        }
        setFieldErrors(temp);
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Registro de Usuario</h2>

      {/* Error general (no asignado a ningún campo) */}
      {errors.length > 0 && (
        <Box mb={2}>
          {errors.map((err, i) => (
            <Typography key={i} color="error">{err}</Typography>
          ))}
        </Box>
      )}

      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            fullWidth
            required
            error={!!fieldErrors.nombre}
            helperText={fieldErrors.nombre}
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
            error={!!fieldErrors.correo}
            helperText={fieldErrors.correo}
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
            error={!!fieldErrors.contraseña}
            helperText={fieldErrors.contraseña}
          />
        </Box>

        <Box mb={2}>
          <FormControl fullWidth required error={!!fieldErrors.idrol}>
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
            {fieldErrors.idrol && <FormHelperText>{fieldErrors.idrol}</FormHelperText>}
          </FormControl>
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth disabled={cargando}>
          {cargando ? 'Registrando...' : 'Registrar'}
        </Button>
      </form>
    </Container>
  );
};

export default Register;
