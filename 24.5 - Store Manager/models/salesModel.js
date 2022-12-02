const connection = require('./connection');

const getSale = async () => {
  const query = `SELECT id as saleId, date, product_id, quantity
  FROM sales
  INNER JOIN sales_products
  ON sales.id = sales_products.sale_id`;
  const [rows] = await connection.execute(query);
  return rows;
}; 
 
const getSoldProduct = async () => {
  const [rows] = await connection.execute('SELECT * FROM sales_products');
  return rows;
}; 

const createSale = async () => {
 const [rows] = await connection.execute(
   'INSERT INTO sales VALUES ()',
 );
 return rows.insertId;
};

const productWithSale = async (id, productId, quantity) => {
 await connection.execute(
   'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ? )',
   [+id, productId, +quantity],
 );
 return {
   id,
   itemsSold: [
     {
   productId,
   quantity,
 }] };
};

const updateSale = async (id, productId, quantity) => {
   connection.execute('UPDATE sales_products SET product_id = ?, quantity = ? WHERE sale_id = ?',
    [productId, +quantity, +id]);
   return {
     saleId: +id, 
     itemUpdated: [
       {
    productId,
    quantity,
  }] }; 
};

const removeSale = async (id) => {
  await connection.execute('DELETE FROM sales WHERE id = ?', [id]);
};

module.exports = {
  getSale,
  getSoldProduct,
  createSale,
  productWithSale,
  updateSale,
  removeSale,
};