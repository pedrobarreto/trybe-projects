const { loginRouter } = require('./loginRoutes');
const { productRouter } = require('./productRoutes');
const { registerRouter } = require('./registerRoutes');
const { salesRouter } = require('./saleRouter');
const { userRouter } = require('./userRoutes');

const routes = [
    ...loginRouter,
    ...registerRouter,
    ...productRouter,
    ...salesRouter,
    ...userRouter,
];

module.exports = { routes };
