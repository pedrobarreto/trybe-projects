const ProductService = require('../service/productService');

const listAllProducts = async (_req, res) => {
    const result = await ProductService.listAllProducts();
    return res.status(200).json(result);
};

module.exports = { listAllProducts };