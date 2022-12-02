const model = require('../models/salesModel');
const { salesReqValidation, haveSalesValidation } = require('../middlewares/salesMiddleware');

const getSale = async () => model.getSale(); 

const createSale = async (request) => {
  const { body: itemsSold } = request;
  const validation = await salesReqValidation(itemsSold);
  const saleId = await model.createSale();
  const { code, message } = validation;
  if (!message) {
  const productsPromises = itemsSold.map(async ({ product_id, quantity }) => {
  await model.productWithSale(saleId, product_id, quantity); 
}); 
await Promise.all(productsPromises);
}
  if (message) return { code, message };
  return { ...{ id: saleId }, itemsSold };
};

const saleFilter = async (param) => {
  const key = Object.keys(param)[0];
  const value = Object.values(param)[0];
  const sales = await model.getSale();

  const filteredSales = sales.filter((sale) => {
  const saleObj = sale;
  return sale[key] === value && delete saleObj.saleId;
  });

  const validation = await haveSalesValidation(filteredSales);
    const { code, message } = validation;

    if (message) return { code, message };
    return filteredSales;
};

const updateSale = async (request) => {
  const { body: itemUpdated, params } = request;
  const validation = await salesReqValidation(itemUpdated);
  const { code, message } = validation;
  if (!message) {
  const productsPromises = itemUpdated.map(async ({ product_id, quantity }) => {
  await model.updateSale(params.id, product_id, quantity); 
}); 
await Promise.all(productsPromises);
}
  if (message) return { code, message };
  return { ...{ saleId: params.id }, itemUpdated };
};

const removeSale = async (id) => model.removeSale(id);

module.exports = {
  getSale,
  createSale,
  saleFilter,
  updateSale,
  removeSale,
};