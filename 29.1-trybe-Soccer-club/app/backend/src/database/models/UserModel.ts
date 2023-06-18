import { Model, DataTypes } from 'sequelize';
import { IUser } from '../../interfaces/user';
import db from '.';

class User extends Model implements IUser {
  id: number;

  username: string;

  role: string;

  email: string;

  password: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default User;
