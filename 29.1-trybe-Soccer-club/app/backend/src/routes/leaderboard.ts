import { Route } from '../types/types';
import {
  getLeaderboard, getHomeLeaderboard, getAwayLeaderboard } from '../controllers/leaderBController';

const leaderboard: Route[] = [

  {
    method: 'get',
    path: '/leaderboard/',
    middleware: [],
    controller: getLeaderboard,
  },

  {
    method: 'get',
    path: '/leaderboard/home',
    middleware: [],
    controller: getHomeLeaderboard,
  },

  {
    method: 'get',
    path: '/leaderboard/away',
    middleware: [],
    controller: getAwayLeaderboard,
  },

];

export default leaderboard;
