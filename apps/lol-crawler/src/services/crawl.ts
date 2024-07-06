import axios from 'axios';
import { Division, Tier, Queue, Region, LeagueEntryDTO, SummonerDTO, MatchDTO, MatchTimelineDTO } from '../models/league';


type LeagueEntriesProps = {
  division: Division;
  tier: Tier;
  queue: Queue;
  region: Region;
  page?: number;
};

export const getLeagueEntries = async ({
  region,
  division,
  queue,
  tier,
  page = 1,
}: LeagueEntriesProps) => {
  const leagueEntriesUrl = `https://${region}.api.riotgames.com/lol/league/v4/entries/${queue}/${tier}/${division}?page=${page}`;
  return (await axios.get<LeagueEntryDTO[]>(leagueEntriesUrl)).data;
};

export const getSummoner = async (summonerId: string) => {
  const summonerUrl = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}`;
  return (await axios.get<SummonerDTO>(summonerUrl)).data;
};

type GetSummonerMatchesProps = {
  puuid: string;
  start?: number;
  count?: number;
};

export const getSummonerMatches = async ({
  puuid,
  start = 0,
  count = 20,
}: GetSummonerMatchesProps) => {
  // 420 is solo q ranked
  const summonersMatchesUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?queue=420&start=${start}&count=${count}`;
  return (await axios.get<string[]>(summonersMatchesUrl)).data;
};

export const getMatchDetails = async (matchId: string) => {
  const matchUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}`;
  return (await axios.get<MatchDTO>(matchUrl)).data;
};

export const getMatchTimeline = async (matchId: string) => {
  const matchTimelineUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}/timeline`;
  return (await axios.get<MatchTimelineDTO>(matchTimelineUrl)).data;
};

