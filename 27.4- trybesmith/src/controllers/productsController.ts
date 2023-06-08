import { Request, Response } from 'express';
import { createProduct, getProduct, createOrder } from '../services/productService';

export const createProducts = async (req:Request, res:Response) => {
  const { name, amount } = req.body;
  const products = await createProduct({ name, amount });
  res.status(201).json({ item: products }); 
};

export const getProducts = async (req:Request, res:Response) => {
  const products = await getProduct();
  res.status(200).json(products); 
};

export const createOrders = async (req:Request, res:Response) => {
  const { userId, products } = req.body;
  const order = await createOrder({ userId, products });

  res.status(201).json({ order });
};
