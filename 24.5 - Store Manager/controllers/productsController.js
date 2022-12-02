const service = require('../services/productsService');

const getProducts = async (req, res) => {
  const products = await service.getProduct();
  res.status(200).json(products);
};

const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const product = await service.updateProduct({ id, name, quantity });
  
  res.status(200).json(product);
};

const createProducts = async (req, res) => {
  const { name, quantity } = req.body;
   await service.createProduct({ name, quantity });
   const product = await service.filterProduct({ name });

  res.status(201).json(product[0]);
};

const filterProducts = async (req, res) => {
  const { id } = req.params;
  const filteredProduct = await service.filterProduct({ id: +id });
  res.status(200).json(filteredProduct[0]);
};

const removeProducts = async (req, res) => {
  const { id } = req.params;
  const filteredProduct = await service.filterProduct({ id: +id });
  await service.removeProduct(+id);
  res.status(200).json(filteredProduct[0]);
};

module.exports = {
  getProducts,
  updateProducts,
  createProducts,
  filterProducts,
  removeProducts,
};