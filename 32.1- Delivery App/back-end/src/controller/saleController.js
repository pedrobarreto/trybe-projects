const SaleService = require('../service/saleService');

const create = async (req, res) => {
    const newSale = await SaleService.createSale(req.body);
    return res.status(201).json(newSale);
};

const getSales = async (req, res) => {
    const sales = await SaleService.getSales();
    return res.status(200).json(sales);
};

const getById = async (req, res) => {
    const sale = await SaleService.getById(req.body);

    if (!sale) return res.status(400).json({ message: 'Sale not found' });

    return res.status(200).json(sale);
};

const getSalesProduct = async (req, res) => {
    const result = await SaleService.getSalesProduct(req.body);
    return res.status(201).json(result);
};

const getSalesBySellerId = async (req, res) => {
    const result = await SaleService.getSalesBySellerId(req.params.id);
    return res.status(201).json(result);
};

const getSalesByUserId = async (req, res) => {
    const result = await SaleService.getSalesByUserId(req.params.id);
    return res.status(201).json(result);
};

module.exports = { 
    create, 
    getById, 
    getSalesProduct, 
    getSales, 
    getSalesBySellerId,
    getSalesByUserId };
