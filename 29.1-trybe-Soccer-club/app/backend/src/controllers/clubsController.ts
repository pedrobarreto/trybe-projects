import { Controller } from '../types/types';
import { filterClubById, getClubs } from '../services/clubService';

const getAllClubs: Controller = async (req, res) => {
  const clubs = await getClubs();

  res.status(200).json([...clubs]);
};

const getClubById: Controller = async (req, res) => {
  const { id } = req.params;

  const club = await filterClubById(+id);

  if (club) {
    return res.status(200).json({ ...club.dataValues });
  }
  res.status(401).json({ message: 'nenhum clube encontrado' });
};

export { getAllClubs, getClubById };
