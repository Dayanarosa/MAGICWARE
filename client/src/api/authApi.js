// src/api/authApi.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const loginRequest = (nombre, contraseña) =>
  axios.post(`${BASE_URL}/auth/login`, { nombre, contraseña });

export const registerRequest = (nombre, correo, contraseña, id_rol) =>
  axios.post(`${BASE_URL}/auth/register`, { nombre, correo, contraseña, id_rol });

export const getProfile = (token) =>
  axios.get(`${BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// ✅ MODIFICA ESTA FUNCIÓN PARA ENVIAR EL TOKEN
export const getRoles = () => {
  return axios.get(`${BASE_URL}/roles`);
};
