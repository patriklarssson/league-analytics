import {
  getAllChampionsStats,
  getChampionStatsByName,
} from '../repositories/champion-repository';

export const getAllChampions = async (req, res, next) => {
  const champions = await getAllChampionsStats();
  res.send(champions);
};

export const getChampion = async (req, res, next) => {
  const { champion } = req.params;
  const champ = await getChampionStatsByName(champion);
  res.send(champ);
};
