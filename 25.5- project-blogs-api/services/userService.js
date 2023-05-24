const { User } = require('../models');

// https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
const getAllUsers = async () => User.findAll({ raw: true });

const filterUser = async (user) => User.findOne(user);

const createUser = async ({ displayName, email, password, image }) => 
User.create({ displayName, email, password, image });

const deleteUser = async ({ id }) => User.destroy({ where: { id } }); 

module.exports = {
  getAllUsers,
  filterUser,
  createUser,
  deleteUser,
};