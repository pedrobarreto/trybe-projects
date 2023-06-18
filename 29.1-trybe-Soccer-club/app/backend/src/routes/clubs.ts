import { Route } from '../types/types';
import { getAllClubs, getClubById } from '../controllers/clubsController';

const clubs: Route[] = [

  {
    method: 'get',
    path: '/clubs',
    middleware: [],
    controller: getAllClubs,
  },
  {
    method: 'get',
    path: '/clubs/:id',
    middleware: [],
    controller: getClubById,
  },

];

export default clubs;
