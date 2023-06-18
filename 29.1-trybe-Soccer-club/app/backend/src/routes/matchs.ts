import { Route } from '../types/types';
import loginValidation from '../middlewares/loginValidation';
import { createMatchs, getAllMatchs,
  updateMatchsProgress, updateMatchsBody } from '../controllers/matchsController';
import matchValidation from '../middlewares/matchValidation';

const matchs: Route[] = [

  {
    method: 'get',
    path: '/matchs',
    middleware: [],
    controller: getAllMatchs,
  },

  {
    method: 'post',
    path: '/matchs',
    middleware: [loginValidation, matchValidation],
    controller: createMatchs,
  },

  {
    method: 'patch',
    path: '/matchs/:id/finish',
    middleware: [],
    controller: updateMatchsProgress,
  },

  {
    method: 'patch',
    path: '/matchs/:id',
    middleware: [],
    controller: updateMatchsBody,
  },
];

export default matchs;
