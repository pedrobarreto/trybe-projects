const { createUser } = require('../controller/userController');
const { newUserValidation, userBodyValidation } = require('../middlewares/newUserValidation');
const { validateToken } = require('../middlewares/userValidation');

const registerRouter = [
  {
    method: 'post',
    path: '/register',
    middleware: [userBodyValidation, newUserValidation],
    controller: createUser,
  },
  {
    method: 'post',
    path: '/register/admin',
    middleware: [validateToken, userBodyValidation, newUserValidation],
    controller: createUser,
  },
];

module.exports = { registerRouter };