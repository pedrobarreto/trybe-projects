import { Op } from 'sequelize';
import { IcreateMatch, IGoals, IMatch, IMatchWithTeams, ITeams } from '../interfaces/match';
import Match from '../database/models/MatchModel';
import Club from '../database/models/ClubModel';

const mapMatchs = async (matchs:IMatchWithTeams[]) =>
  matchs.map((match) => ({
    id: match.id,
    homeTeam: match.homeTeam,
    homeTeamGoals: match.homeTeamGoals,
    awayTeam: match.awayTeam,
    awayTeamGoals: match.awayTeamGoals,
    inProgress: !!match.inProgress,
    homeClub: {
      clubName: match.homeClub.clubName,
    },
    awayClub: {
      clubName: match.awayClub.clubName,
    },
  }));

const filterMatchByProgress = async (inProgress:{ inProgress?:boolean }) => {
  const filteredMatchs = await Match.findAll({
    raw: true,
    nest: true,
    where: inProgress,
    include: [{
      model: Club,
      as: 'homeClub',
    }, {
      model: Club,
      as: 'awayClub',
    }],
  });
  return mapMatchs(filteredMatchs as unknown as IMatchWithTeams[]);
};

const filterMatch = async ([...teams]:ITeams[]) => {
  let searchAttributes = {};
  if (teams) { searchAttributes = { [Op.or]: teams }; }
  const filteredMatchs = await Match.findAll({
    raw: true,
    nest: true,
    where: { inProgress: false, ...searchAttributes },
    include: [{
      model: Club,
      as: 'homeClub',
    }, {
      model: Club,
      as: 'awayClub',
    }] });
  return filteredMatchs as unknown as IMatchWithTeams[];
};

const createMatch = async ({ homeTeam, awayTeam, homeTeamGoals,
  awayTeamGoals, inProgress }:IcreateMatch):Promise<IMatch> => {
  const match = await Match.create({
    homeTeam,
    homeTeamGoals,
    awayTeam,
    awayTeamGoals,
    inProgress });

  return match;
};

const updateMatch = async (data:IGoals, id:number) => {
  await Match.update(
    { ...data },
    { where: { id } },
  );

  return 'Atualizado com sucesso';
};

export { createMatch, filterMatch, updateMatch, filterMatchByProgress };
