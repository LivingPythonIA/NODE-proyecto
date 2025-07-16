import { login } from '../services/auth.service.js';

export const signIn = async (req, res, next) => {
  try {
    const token = await login(req.body);
    if (!token) return res.status(401).json({ message: 'Credenciales inválidas' });
    res.json({ token });
  } catch (err) { next(err); }
};
