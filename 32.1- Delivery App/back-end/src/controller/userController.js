const UserService = require('../service/userService');

const login = async (req, res) => res.status(200).json(req.body.user);

const createUser = async (req, res) => {
    const user = await UserService.createUser(req.body);
    return res.status(201).json(user);
};

const deleteUser = async (req, res) => {
    const users = await UserService.deleteUser(req.params);
    return res.status(200).json(users);
};

const getAllUsers = async (req, res) => {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
};

const getByRole = async (_req, res) => {
    const users = await UserService.getByRole();
    return res.status(200).json(users);
};

module.exports = { login, createUser, deleteUser, getAllUsers, getByRole };