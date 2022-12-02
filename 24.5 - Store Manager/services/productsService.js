 const model = require('../models/productsModel');

const getProduct = async () => model.getProduct();

const updateProduct = async ({ id, name, quantity }) => model.updateProduct({ id, name, quantity });

const createProduct = async ({ name, quantity }) => model.createProduct({ name, quantity });

const filterProduct = async (param) => {
  const key = Object.keys(param)[0];
  const value = Object.values(param)[0];
  const products = await model.getProduct();
  return products.filter((product) => product[key] === value);
};

const removeProduct = async (id) => model.removeProduct(id);

module.exports = {
  getProduct,
  updateProduct,
  createProduct,
  filterProduct,
  removeProduct,
};