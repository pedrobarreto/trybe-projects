import { RequestHandler as Middleware } from 'express';
import { readFileSync } from 'fs';
import filterUser from '../services/userService';
import { decodeToken } from '../utils/tokenJWT';

const loginValidation: Middleware = async (req, res, next) => {
  const token = readFileSync('authToken.key', 'utf-8');

  const decode = await decodeToken(token);
  if (decode.message) {
    return res.status(401).json({ error: decode.message });
  }

  const userValid = await filterUser({ where: { email: decode.email } });

  if (!userValid) {
    return res.status(401).json({ message: 'Usuário não existe' });
  }

  const { role } = userValid;

  req.body.role = { role };
  next();
};

export default loginValidation;
