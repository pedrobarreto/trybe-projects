import { Model, DataTypes } from 'sequelize';
import Club from './ClubModel';
import db from '.';

class Match extends Model {
  id: number;

  homeTeam: number;

  homeTeamGoals: number;

  awayTeam: number;

  awayTeamGoals: number;

  inProgress: boolean;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
  },
  inProgress: {
    type: DataTypes.INTEGER,
  },

}, {
  underscored: true,
  sequelize: db,
  modelName: 'matchs',
  timestamps: false,
});

Match.belongsTo(
  Club,
  { foreignKey: 'homeTeam', as: 'homeClub' },
);

Match.belongsTo(
  Club,
  { foreignKey: 'awayTeam', as: 'awayClub' },
);

export default Match;
