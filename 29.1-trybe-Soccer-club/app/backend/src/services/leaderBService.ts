import { IMatchWithTeams, ITeams } from '../interfaces/match';
import { ILeaderboard } from '../interfaces/leaderboard';
import { filterMatch } from './matchService';

const totalPointsCalc = (acc:ILeaderboard, teamA:number, teamB:number, name:string) => {
  if (teamA === teamB) {
    acc.totalPoints += 1;
    acc.totalDraws += 1;
  }
  acc.goalsFavor += teamA;
  acc.goalsOwn += teamB;
  acc.name = name;
  acc.totalGames += 1;
  const efficiency = (acc.totalPoints / (acc.totalGames * 3)) * 100;
  acc.goalsBalance = acc.goalsFavor - acc.goalsOwn;
  acc.efficiency = Number(efficiency.toFixed(2));
  return acc;
};

const awayPointsCalc = (acc:ILeaderboard, key:IMatchWithTeams, teams:ITeams[]) => {
  let teamA = key.homeTeamGoals;
  let teamB = key.awayTeamGoals;
  let name = key.homeClub.clubName;

  if (teams[teams.length - 1] && key.awayTeam === Object.values(teams[teams.length - 1])[0]) {
    teamA = key.awayTeamGoals;
    teamB = key.homeTeamGoals;
    name = key.awayClub.clubName;
  }
  if (teamA > teamB) {
    acc.totalPoints += 3;
    acc.totalVictories += 1;
  }
  if (teamA < teamB) { acc.totalLosses += 1; }
  return totalPointsCalc(acc, teamA, teamB, name);
};

const leaderBoard = async (teams:ITeams[]) => {
  const teamStats = await filterMatch(teams);
  return teamStats.reduce(
    (acc, key) => awayPointsCalc(acc, key, teams),
    {
      name: '',
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    },
  );
};

const sortLeaderBoard = (value:ILeaderboard[]) =>
  value.sort((a, b) =>
    b.totalPoints - a.totalPoints
   || b.totalVictories - a.totalVictories
   || b.goalsBalance - a.goalsBalance
   || b.goalsFavor - a.goalsFavor
   || b.goalsOwn - a.goalsOwn);

export { leaderBoard, sortLeaderBoard };
