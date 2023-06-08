import model from '../models/productModel';

import { IProduct, OrderArray } from '../interfaces/product';

export const createProduct = async ({ name, amount }:IProduct) => 
  model.createProduct({ name, amount });

export const createOrder = async ({ userId, products }:OrderArray) => {
  const orderId = await model.createOrder({ userId });
  await products.map((productId:number) => model.updateProduct({ orderId, productId }));
  return {
    userId,
    products,
  };
};

export const getProduct = async () => model.getProduct();
