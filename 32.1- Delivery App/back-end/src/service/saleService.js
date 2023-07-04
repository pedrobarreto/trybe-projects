const { sales, users, salesProducts, products } = require('../database/models');

const createSalesProduct = async (data, id) => {
    const newSalesProduct = data.map(async (value) => {
        const salesProduct = { 
            quantity: value.quantity,
            productId: value.id,
            saleId: id,
        };
        await salesProducts.create(salesProduct);
        return salesProduct;
    });
    const response = await Promise.all(newSalesProduct);

    return response;
};

const createSale = async (data) => {
    const { userId,
        sellerId, 
        totalPrice,
        deliveryAddress, 
        deliveryNumber, 
        status,
        cartList } = data;

    const newSale = await sales.create({ 
        userId, 
        sellerId, 
        totalPrice, 
        deliveryAddress, 
        deliveryNumber, 
        status });

    const { id } = newSale;

    const salesProduct = await createSalesProduct(cartList, id);

    return { newSale, salesProduct };
};

const getSales = async () => sales.findAll();

const getById = async (data) => {
    const { id } = data;
    const sale = await sales.findByPk(id);

    return sale;
};

const getSalesProduct = async ({ saleId }) => {
    const response = await sales.findAll({
        where: { id: saleId },
        include: [{
            model: products,
            as: 'products',
            through: { attributes: ['quantity'] }, 
        }, {
            model: users,
            as: 'seller',
            attributes: { exclude: ['password'] },
        }],
    });

    return response;
};

const getSalesBySellerId = async (sellerId) => {
    const response = await sales.findAll({
        where: { sellerId: +sellerId },
    });
    return response;
};

const getSalesByUserId = async (userId) => {
    const response = await sales.findAll({
        where: { userId: +userId },
    });
    return response;
};

module.exports = { 
    createSale, 
    getById, 
    getSalesProduct, 
    getSales,
    getSalesBySellerId,
    getSalesByUserId };
