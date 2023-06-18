import { RequestHandler as Middleware } from 'express';
import * as bcrypt from 'bcryptjs';
import filterUser from '../services/userService';
import { signToken, writeToken } from '../utils/tokenJWT';

const authValidation: Middleware = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }

  const userValid = await filterUser({ where: { email } });

  if (!userValid) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const passwordValid = bcrypt.compareSync(password, userValid.password);

  if (!passwordValid) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const { id, role, username } = userValid;
  const token = await signToken({ id, email });
  await writeToken(token);

  req.body.token = { token };

  req.body.user = { id, username, role, email };
  next();
};

export default authValidation;
