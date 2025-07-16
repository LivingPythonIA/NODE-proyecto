import jwt from 'jsonwebtoken';

export const login = async ({ email, password }) => {
  // ⛔ En un proyecto real validarías contra Firebase Auth o tu propia DB
  if (email !== 'admin@techlab.com' || password !== '1234') return null;

  const payload = { email, role: 'admin' };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  });
  return token;
};
