import { IClub } from '../interfaces/club';
import Club from '../database/models/ClubModel';

const getClubs = async ():Promise<IClub[]> => Club.findAll({ raw: true });

const filterClubById = async (id:number):Promise<IClub | null> =>
  Club.findByPk(id);

export { getClubs, filterClubById };
