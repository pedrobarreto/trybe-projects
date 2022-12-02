require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const product = require('./controllers/productsController');
const sales = require('./controllers/salesController');
const productsMiddleware = require('./middlewares/productsMiddleware');

const { validateProductName, validateProductQuantity, validateProductId } = productsMiddleware;

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/', product.getProducts);
app.get('/products/:id', validateProductId, product.filterProducts);
app.post('/products', validateProductName, validateProductQuantity, product.createProducts);
app.put('/products/:id', validateProductQuantity, 
validateProductName, validateProductId, product.updateProducts);
app.delete('/products/:id', validateProductId, product.removeProducts);

app.get('/sales/', sales.getSales);
app.get('/sales/:id', sales.filterSales);
app.put('/sales/:id', sales.updateSales);
app.post('/sales', sales.createSales);
app.delete('/sales/:id', sales.removeSales);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
