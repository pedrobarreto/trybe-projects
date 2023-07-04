const Joi = require('joi');

const saleSchema = Joi.object().keys({
    userId: Joi.number().required(),
    sellerId: Joi.number().required(),
    totalPrice: Joi.number().required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.string().required(),
    status: Joi.string().valid('Pendente', 'Entregue', 'Preparando', 'Em Trânsito').required(),
    cartList: Joi.array().required(),
});

module.exports = { saleSchema };