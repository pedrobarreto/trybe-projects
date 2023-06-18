import { Controller } from '../types/types';

const getLogin: Controller = async (req, res) => {
  res.status(200).json({ user: { ...req.body.user }, ...req.body.token });
};

const getLoginValidate: Controller = async (req, res) => {
  const [role] = Object.values(req.body.role);

  res.status(200).send(role);
};

export { getLogin, getLoginValidate };
