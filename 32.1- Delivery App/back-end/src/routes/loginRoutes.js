const { login } = require('../controller/userController');
const { userValidation } = require('../middlewares/userValidation');

const loginRouter = [
  {
    method: 'post',
    path: '/login',
    middleware: [userValidation],
    controller: login,
  },
];

module.exports = { loginRouter };