// interface ChampionStatsDto {
//   _id: string;
//   itemsStats: {
//     itemId: number;
//     count: number;
//   };
// }

import { StatPerks } from "../league";

type ItemTimeline = {
  timestamp: number;
  itemId: number;
  isFullItem: boolean;
};
interface ChampionStatsDto {
  // _id: string;
  championName: string;
  items: ItemTimeline[];
  trinket: number;
  summonerSpells: number[];
  skillLevelOrder: number[];
  win: boolean;
  runes: {
    primary: {
      style: number;
      selection: number[];
    };
    secondary: {
      style: number;
      selection: number[];
    };
    statPerks: StatPerks;
  };
}
export { ChampionStatsDto };
