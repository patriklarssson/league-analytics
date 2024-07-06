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

// TODO USE FRAME TO GET ITEM AT TIME BUY https://chatgpt.com/c/d22cea58-5fee-4c6d-8901-428ac442f6d4
