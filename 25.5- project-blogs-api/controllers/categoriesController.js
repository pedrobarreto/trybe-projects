const service = require('../services/categoryService');

const createCategories = async (req, res) => {
  const { name } = req.body;
  const categories = await service.createCategory({ name });

  res.status(201).json(categories);
};

const getCategories = async (req, res) => {
  const categories = await service.getAllCategories();

  res.status(200).json(categories);
};

module.exports = { 
  createCategories,
  getCategories,
};