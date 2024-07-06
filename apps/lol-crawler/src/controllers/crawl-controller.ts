import { ParticipantChampion } from '../models/db';
import { EventType } from '../models/league/match-timeline-dto';
import { updateChampionItemStats } from '../repositories/champion-repository';
import { checkOrInsertAnalyzedMatch } from '../repositories/match-repository';
import {
  getLeagueEntries,
  getMatchDetails,
  getMatchTimeline,
  getSummoner,
  getSummonerMatches,
} from '../services/crawl';

const crawl = async (req, res, next) => {
  try {
    const leagueEntries = await getLeagueEntries({
      region: 'EUW1',
      division: 'I',
      tier: 'EMERALD',
      queue: 'RANKED_SOLO_5x5',
    });
    const { puuid } = await getSummoner(leagueEntries[3].summonerId);
    const summonerMatchesId = await getSummonerMatches({
      puuid,
      start: 0,
      count: 1,
    });

    summonerMatchesId.forEach(async (matchId) => {
      const matchExists = await checkOrInsertAnalyzedMatch(matchId);
      if (matchExists) return;

      const matchDetails = await getMatchDetails(matchId);
      const matchTimeline = await getMatchTimeline(matchId);

      const champions = matchDetails.info.participants.map((participant) => {
        const events = matchTimeline.info.frames
          .flatMap((x) => x.events)
          .filter((x) => x.participantId === participant.participantId)
          .filter(
            (x) =>
              x?.type === EventType.SkillLevelUp ||
              x?.type === EventType.ItemPurchased
          );

        // const events = matchTimeline.info.frames
        //   .map((x) =>
        //     x.events.find(
        //       (sum) => sum.participantId === participant.participantId
        //     )
        //   )
        //   .filter(
        //     (x) =>
        //       x?.type === EventType.SkillLevelUp ||
        //       x?.type === EventType.ItemPurchased
        //   );

        return new ParticipantChampion(participant, events);
      });

      champions.forEach((champion) => {
        updateChampionItemStats(champion);
      });
    });

    res.send('Data added to DB');
  } catch (error) {
    console.error('Error in crawl function: ', error);
    res.status(500).send('Error occurred while crawling data');
  }
};

export { crawl };
