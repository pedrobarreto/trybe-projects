import { Route } from '../types/types';
import { getLoginValidate, getLogin } from '../controllers/usersController';
import authValidation from '../middlewares/authValidation';
import loginValidation from '../middlewares/loginValidation';

const login: Route[] = [
  {
    method: 'post',
    path: '/login',
    middleware: [authValidation],
    controller: getLogin,
  },
  {
    method: 'get',
    path: '/login/validate',
    middleware: [loginValidation],
    controller: getLoginValidate,
  },
];

export default login;
