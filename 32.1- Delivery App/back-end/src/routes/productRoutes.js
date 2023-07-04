const { listAllProducts } = require('../controller/productController');

const productRouter = [
    {
      method: 'get',
      path: '/products',
      middleware: [],
      controller: listAllProducts,
    },
  ];

module.exports = { productRouter };