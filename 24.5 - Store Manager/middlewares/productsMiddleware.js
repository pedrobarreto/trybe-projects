const service = require('../services/productsService');

 module.exports = {
  async validateProductId(req, res, next) {
    const { id } = req.params;
    const filteredProduct = await service.filterProduct({ id: +id });
    if (filteredProduct.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    next();
    },
    async validateProductQuantity(req, res, next) {
      const { quantity } = req.body;
      if ([quantity].includes(undefined) || quantity.length === 0) {
        return res.status(400).json({ message: '"quantity" is required' });
      }
      if (typeof quantity !== 'number' || quantity < 1) {
        return res.status(422)
        .json({ message: '"quantity" must be a number larger than or equal to 1' });
      }
      next();
      },
    async validateProductName(req, res, next) {
    const { name } = req.body;
    const filteredProduct = await service.filterProduct({ name });
    if ([name].includes(undefined) || name.length === 0) {
      return res.status(400).json({ message: '"name" is required' });
    }
    if (name.length < 5) {
      return res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
    }
    if (filteredProduct.length > 0) {
      return res.status(409)
      .json({ message: 'Product already exists' });
    }
    next();
    },
};
