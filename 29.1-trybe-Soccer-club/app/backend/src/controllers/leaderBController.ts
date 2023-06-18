import { Controller } from '../types/types';
import { leaderBoard, sortLeaderBoard } from '../services/leaderBService';
import { getClubs } from '../services/clubService';

const getHomeLeaderboard: Controller = async (req, res) => {
  const clubs = await getClubs();

  const clubsPromisses = clubs.map(async ({ id }) =>
    leaderBoard([{ homeTeam: id }]));

  const clubStats = await Promise.all(clubsPromisses);

  const sortedStats = await sortLeaderBoard(clubStats);

  res.status(200).json(sortedStats);
};

const getAwayLeaderboard: Controller = async (req, res) => {
  const clubs = await getClubs();

  const clubsPromisses = clubs.map(async ({ id }) =>
    leaderBoard([{ awayTeam: id }]));

  const clubStats = await Promise.all(clubsPromisses);

  const sortedStats = await sortLeaderBoard(clubStats);

  res.status(200).json(sortedStats);
};

const getLeaderboard: Controller = async (req, res) => {
  const clubs = await getClubs();

  const clubsPromisses = clubs.map(async ({ id }) =>
    leaderBoard([{ homeTeam: id }, { awayTeam: id }]));

  const clubStats = await Promise.all(clubsPromisses);

  const sortedStats = await sortLeaderBoard(clubStats);

  res.status(200).json(sortedStats);
};

export { getHomeLeaderboard, getLeaderboard, getAwayLeaderboard };
