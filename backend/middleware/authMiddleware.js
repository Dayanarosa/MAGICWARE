import { verifyTokenJWT } from '../libs/jwt.js';


export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ error: 'Token requerido en la cabecera Authorization' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(400).json({ error: 'Formato de token incorrecto. Se espera: Bearer <token>' });
  }

  const token = parts[1];
  const decoded = verifyTokenJWT(token);

  if (!decoded) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }

  req.user = decoded;
  next();
};

export const checkRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.user?.rol;

    if (!userRole) {
      return res.status(403).json({ error: 'Rol de usuario no definido en el token' });
    }

    if (!roles.includes(userRole)) {
      return res.status(403).json({ error: 'Acceso denegado: rol insuficiente' });
    }

    next();
  };
};
