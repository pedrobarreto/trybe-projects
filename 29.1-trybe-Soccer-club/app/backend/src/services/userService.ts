import { FilterUser, IUser } from '../interfaces/user';
import User from '../database/models/UserModel';

const filterUser = async (user:FilterUser):Promise<IUser | null> => User.findOne(user);

export default filterUser;
