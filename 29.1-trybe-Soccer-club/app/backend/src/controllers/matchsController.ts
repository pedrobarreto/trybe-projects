import { Controller } from '../types/types';
import { createMatch,
  filterMatchByProgress, updateMatch } from '../services/matchService';

const getAllMatchs: Controller = async (req, res) => {
  const { inProgress } = req.query;
  let matchs = await filterMatchByProgress({});

  if (inProgress === 'true') {
    matchs = await filterMatchByProgress({ inProgress: true });
  }
  if (inProgress === 'false') {
    matchs = await filterMatchByProgress({ inProgress: false });
  }

  res.status(200).json([...matchs]);
};

const createMatchs: Controller = async (req, res) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
  const [role] = Object.values(req.body.role); if (role === 'admin') {
    const match = await createMatch({ homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress });
    return res.status(201).json(match);
  }
  res.status(401).json({ message: 'Unauthorized' });
};

const updateMatchsProgress: Controller = async (req, res) => {
  const { id } = req.params;

  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

  const updateObj = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: false };

  const match = await updateMatch(updateObj, +id);
  return res.status(200).json({ message: match });
};

const updateMatchsBody: Controller = async (req, res) => {
  const { id } = req.params;

  const { homeTeamGoals, awayTeamGoals } = req.body;

  const updateObj = { homeTeamGoals, awayTeamGoals };

  const match = await updateMatch(updateObj, +id);
  return res.status(200).json({ message: match });
};

export { getAllMatchs, createMatchs, updateMatchsProgress, updateMatchsBody };
