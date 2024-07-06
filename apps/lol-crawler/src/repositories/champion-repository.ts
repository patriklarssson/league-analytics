import { ChampionStatsDto, ParticipantChampion } from '../models/db';
import { getDb } from '../utils/db';

const championsColletion = async () => {
  const db = getDb();
  return db.collection<ChampionStatsDto>('champions');
};

export const getAllChampionsStats = async () => {
  const championCollection = await championsColletion();
  const cursor = championCollection.find({});
  const champions = await cursor.toArray();
  return champions;
};

export const getChampionStatsByName = async (championName: string) => {
  const championCollection = await championsColletion();
  return await championCollection.findOne({ championName: championName });
};

export const updateChampionItemStats = async (props: ParticipantChampion) => {
  try {
    const championCollection = await championsColletion();

    const result = await championCollection.insertOne(props);

    console.log(`Updated item stats for champion ${props.championName}.`, result);
  } catch (error) {
    console.error('Error updating item stats: ', error);
  }
};
