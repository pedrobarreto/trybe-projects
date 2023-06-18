import { RequestHandler as Middleware } from 'express';
import { filterClubById } from '../services/clubService';

const matchValidation: Middleware = async (req, res, next) => {
  const { homeTeam, awayTeam } = req.body;
  const validHomeTeam = await filterClubById(homeTeam);
  const validAwayTeam = await filterClubById(awayTeam);
  if (!validAwayTeam || !validHomeTeam) {
    return res.status(401).json({ message: 'There is no team with such id!' });
  } if (homeTeam === awayTeam) {
    return res.status(401)
      .json({ message:
     'It is not possible to create a match with two equal teams' });
  }
  next();
};

export default matchValidation;
