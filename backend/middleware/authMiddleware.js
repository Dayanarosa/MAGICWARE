import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['Authorization'];
    if (!token)  return res.status(403).json({error: 'Token requerido'});

    //Authorization: Bearer <token>
    jwt.verify(token.split(' ')[1], process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({error: 'Token invalido'});
        req.user = decoded;
        next();
    });
}

export const checkRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({error: 'Acceso denegado'});
        }
        next();
    };

}