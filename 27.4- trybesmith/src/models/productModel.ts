import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct, Product, ProductOrder, IOrder } from '../interfaces/product';

const createProduct = async ({ name, amount }:IProduct): Promise<Product> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ? )',
    [name, amount],
  );
  return {
    id,
    name,
    amount,
  };
};

const getProduct = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return products;
};

const updateProduct = async ({ orderId, productId }:ProductOrder) => {
  const [rows] = await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
    [orderId, productId],
  );
  return rows;
};

const createOrder = async ({ userId }:IOrder) => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders ( userId ) VALUES ( ? )', 
    [userId],
  );
  return id;
};

export default { createProduct, getProduct, updateProduct, createOrder };