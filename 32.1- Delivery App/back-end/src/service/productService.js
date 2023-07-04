const { products } = require('../database/models');

const listAllProducts = async () => {
    const result = await products.findAll();
    return result;
};

module.exports = { listAllProducts };