export interface IMatch{
  id: number,
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress:boolean,
}

export interface IcreateMatch{
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface IMatchWithTeams extends IMatch {
  awayClub: {
    id:number,
    clubName: string;
  };
  homeClub: {
    id: number,
    clubName: string;
  };
}

export interface IGoals{
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface ITeams{
  homeTeam?: number,
  awayTeam?: number,
}
