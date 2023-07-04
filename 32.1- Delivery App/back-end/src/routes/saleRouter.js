const { 
  create, 
  getSales, 
  getSalesProduct, 
  getSalesBySellerId, 
  getSalesByUserId } = require('../controller/saleController');
const { saleBodyValidation } = require('../middlewares/saleValidation');
const { validateToken } = require('../middlewares/userValidation');

const salesRouter = [
  {
    method: 'post',
    path: '/sales',
    middleware: [validateToken, saleBodyValidation],
    controller: create,
  },
  {
    method: 'get',
    path: '/sales',
    middleware: [],
    controller: getSales,
  },
  {
    method: 'post',
    path: '/orders',
    middleware: [],
    controller: getSalesProduct,
  },
  {
    method: 'get',
    path: '/sales/seller-id/:id',
    middleware: [],
    controller: getSalesBySellerId,
  },
   {
    method: 'get',
    path: '/sales/user-id/:id',
    middleware: [],
    controller: getSalesByUserId,
  },
];

module.exports = { salesRouter };