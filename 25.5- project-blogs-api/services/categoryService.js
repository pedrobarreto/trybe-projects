const { Category } = require('../models');

// https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
const getAllCategories = async () => Category.findAll({ raw: true });

const createCategory = async ({ name }) => Category.create({ name });

const filterCategory = async (categoryIds) => {
  let categoryNotFound = false;
  const categoryPromises = categoryIds.map(async (id) => {
  const validateCategory = await Category.findByPk(id); 
  if (!validateCategory) {
  categoryNotFound = true;
  }
});
await Promise.all(categoryPromises);
return categoryNotFound;
};

module.exports = {
  getAllCategories,
  createCategory,
  filterCategory,
};