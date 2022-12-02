const service = require('../services/salesService');

const getSales = async (req, res) => {
  const sales = await service.getSale();
  res.status(200).json(sales);
};

const createSales = async (req, res) => {
  const sales = await service.createSale(req);
  const { code, message } = sales;
  if (message) return res.status(code).json({ message });
  res.status(201).json(sales);
};

const filterSales = async (req, res) => {
  const { id } = req.params;
  const filteredProduct = await service.saleFilter({ saleId: +id });
  const { code, message } = filteredProduct;
  if (message) return res.status(code).json({ message });
  res.status(200).json(filteredProduct);
};

const updateSales = async (req, res) => {
  const sales = await service.updateSale(req);
  const { code, message } = sales;
  if (message) return res.status(code).json({ message });
  res.status(200).json(sales);
};

const removeSales = async (req, res) => {
  const { id } = req.params;
  const filteredSale = await service.saleFilter({ saleId: +id });
  const { code, message } = filteredSale;
  if (message) return res.status(code).json({ message });
  await service.removeSale(+id);
  res.status(200).json(filteredSale);
};

module.exports = {
  getSales,
  createSales,
  filterSales,
  updateSales,
  removeSales,
};