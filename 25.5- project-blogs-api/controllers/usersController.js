const service = require('../services/userService');
const { decodeToken, signToken } = require('../utils/tokenJWT');

const createUsers = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const users = await service.createUser({ displayName, email, password, image });

  res.status(201).json(users);
};

const getUsers = async (req, res) => {
  const users = await service.getAllUsers();

  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await service.filterUser({ where: { id } });

  res.status(200).json(user);
};

const loggedUser = async (req, res) => {
  const { email } = req.body;
  const { id } = await service.filterUser({ where: { email } });
  const token = await signToken({ userId: id });
  
  res.status(200).json({ token });
};

const deleteUsers = async (req, res) => {
  const { authorization } = req.headers;
  const { userId } = await decodeToken(authorization);
  await service.deleteUser({ id: userId });

  res.status(204).json();
};

module.exports = {
  createUsers,
  getUsers,
  getUser,
  loggedUser,
  deleteUsers,
};