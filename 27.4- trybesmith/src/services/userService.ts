import model from '../models/userModel';

import { IUser, Login } from '../interfaces/user';

export const createUser = async ({ username, classe, level, password }:IUser) =>
  model.createUser({ username, classe, level, password });

export const filterUser = async ({ username, password }:Login) => {
  const [user] = await model.filterUser({ username, password });
  return user;
};