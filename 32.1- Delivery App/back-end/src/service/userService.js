const md5 = require('md5');
const { users } = require('../database/models');
const { createToken } = require('../utils/utilsJWT');
const checkPassword = require('../utils/checkPassword');

const getAllUsers = async () => {
  const usersList = await users.findAll();
  return usersList;
};

const getOneUser = async (email) => {
  const userRegistered = await users.findOne({ where: { email } });
  return userRegistered;
};

const getById = async (id) => {
  const userRegistered = await users.findByPk(id);
  return userRegistered; 
};

const getByRole = async () => {
  const user = await users.findAll({ where: { role: 'seller' } });
  return user;
};

const login = async (data) => {
  const userRegistered = await getOneUser(data.email);

  if (!userRegistered) return false;

  const password = checkPassword(data.password, userRegistered.password);

  const token = createToken(userRegistered);

  return { 
    id: userRegistered.id, 
    name: userRegistered.name,
    role: userRegistered.role,
    email: userRegistered.email,
    password,
    token, 
  };
};

const createUser = async (data) => {
  const { name, email, password, role } = data;

  const userRegistered = await getOneUser(email);

  if (userRegistered) return false;

  const newUser = await users.create({ name, email, password: md5(password), role });

  const token = createToken(newUser);
  
  return {
    id: newUser.id,
    name,
    email,
    role,
    token,
  };
};

const deleteUser = async (data) => {
  await users.destroy({ 
    where: {
      id: data.id, 
    }, 
  });

  const listUsers = await getAllUsers();
  return listUsers;
};

module.exports = { 
  login, 
  createUser, 
  getOneUser, 
  getAllUsers, 
  deleteUser, 
  getById,
  getByRole };