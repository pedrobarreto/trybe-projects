const haveSalesValidation = async (sales) => {
  if (sales.length === 0) {
    return { 
      code: 404,
      message: 'Sale not found' }; 
  }
  return [];
};

const salesReqValidation = async (items) => {
 const itensMapping = items.map(({ product_id: id, quantity }) => {
  if (!id) return { code: 400, message: '"product_id" is required' };
  if (quantity < 1 || typeof quantity === 'string') {
    return { 
        code: 422,
        message: '"quantity" must be a number larger than or equal to 1' }; 
   }
  if (!quantity) return { code: 400, message: '"quantity" is required' };
return [];
  });
 return itensMapping.find((item) => item);
};
  
module.exports = {
haveSalesValidation,
salesReqValidation,
};
