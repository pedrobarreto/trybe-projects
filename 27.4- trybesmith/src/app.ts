import express, { json } from 'express';
import { createUsers, loggedUsers } from './controllers/usersController';
import validateBody from './middlewares/userValidation';
import validateLogin from './middlewares/loginValidation';
import { createProducts, getProducts, createOrders } from './controllers/productsController';
import validateAuth from './middlewares/authValidation';
import { validateProduct, validateOrder } from './middlewares/productValidation';

const app = express();

app.use(json());

app.post('/users/', validateBody, createUsers);
app.post('/login/', validateLogin, loggedUsers);
app.post('/products/', validateAuth, validateProduct, createProducts);
app.get('/products/', validateAuth, getProducts);
app.post('/orders/', validateAuth, validateOrder, createOrders);

export default app;
