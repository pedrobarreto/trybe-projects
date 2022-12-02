const connection = require('./connection');

const getProduct = async () => {
  const [rows] = await connection.execute('SELECT * FROM products');
  return rows;
}; 

const createProduct = async ({ name, quantity }) => {
  const [rows] = await connection.execute(
   'INSERT INTO products (name, quantity) VALUES (?, ?)',
   [name, quantity],
 );
 return {
   id: rows.insertId,
   name,
   quantity,
 };
};

const updateProduct = async ({ id, name, quantity }) => {
  await connection.execute(
    'UPDATE products SET name = ?, quantity = ? WHERE id = ?',
    [name, quantity, id],
  );
  return {
    id,
    name,
    quantity,
  };
 };

 const removeProduct = async (id) => {
  await connection.execute('DELETE FROM products WHERE id = ?', [id]);
};

module.exports = {
 getProduct,
 createProduct,
 updateProduct,
 removeProduct,
};