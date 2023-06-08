import { Request, Response } from 'express';
import { createUser, filterUser } from '../services/userService';
import { signToken } from '../../utils/tokenJWT';

export const createUsers = async (req:Request, res:Response) => {
  const { username, classe, level, password } = req.body;
  const { id } = await createUser({ username, classe, level, password });
  const token = await signToken({ id, username });
  res.status(201).json({ token });
};

export const loggedUsers = async (req:Request, res:Response) => {
  const { username, password } = req.body;
  const user = await filterUser({ username, password });

  if (!user) {
    return res.status(401).json({ error: 'Username or password invalid' });
  }

  const token = await signToken({ id: user.id, username });
  res.status(200).json({ token });
};
