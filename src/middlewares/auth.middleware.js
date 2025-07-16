import jwt from 'jsonwebtoken';

export default function protect(req, res, next) {
  const auth = req.headers.authorization || '';
  const [, token] = auth.split(' ');
  if (!token) return res.status(401).json({ message: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;      // lo tendrás disponible en los controladores
    next();
  } catch {
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
}
// Este middleware protege las rutas que requieren autenticación