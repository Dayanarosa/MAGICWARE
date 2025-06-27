import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  createUser,
  findUserByNombre,
  findUserById
} from "../models/User.js";

const router = express.Router();

// REGISTRO
router.post("/register", async (req, res) => {
  const { nombre, contraseña, rol } = req.body;

  if (!nombre || !contraseña || !rol) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    await createUser(nombre, contraseña, rol);
    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    console.error("Error en /register:", error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { nombre, contraseña } = req.body;

  if (!nombre || !contraseña) {
    return res.status(400).json({ error: "Nombre y contraseña requeridos" });
  }

  try {
    const user = await findUserByNombre(nombre);
    if (!user) return res.status(401).json({ error: "Usuario no encontrado" });

    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    if (!isPasswordValid) return res.status(401).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user.id_usuario, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error en /login:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

// ME
router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    res.json(user);
  } catch (error) {
    console.error("Error en /me:", error);
    res.status(500).json({ error: "Error al obtener datos del usuario" });
  }
});

export default router;
