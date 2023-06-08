import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, IUser, Login } from '../interfaces/user';

const createUser = async ({ username, classe, level, password }:IUser): Promise<User> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ? )',
    [username, classe, level, password],
  );
  return {
    id,
    username,
    classe,
    level,
    password,
  };
};

const filterUser = async ({ username, password }:Login): Promise<User[]> => {
  const [users] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
  return users as User[];
};
export default { createUser, filterUser };