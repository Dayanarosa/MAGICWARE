import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";  
import { verifyToken } from "../middleware/authMiddleWare.js";
    
import { createUser, findUserByUsername, findUserById } from "../models/User.js";

const router = express.Router();

//register
router.post("/register", async (req, res) => {
    const { username, password, role } = req.body;
    try {
         await createUser(username, password, role);
        res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }

})

//post /login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await findUserByUsername(username);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }
        const token = jwt.sign({ id: user.Id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1h" });
        res.json({token})

    } catch (error) {
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
})

//get /me obtener la informacion del usuario autenticado
router.get("/me", verifyToken, async (req, res) => {
    try {
        const user = await findUserById(req.user.id);
        if (!user)  return res.status(404).json({ message: "Usuario no encontrado" });
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la información del usuario" });
    }
});

export default router;