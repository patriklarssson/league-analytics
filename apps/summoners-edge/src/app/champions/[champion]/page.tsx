import axios from 'axios';

interface ChampionPageProps {
  params: {
    champion: string;
  };
}

// TEMP
type ItemTimeline = {
  timestamp: number;
  itemId: number;
  isFullItem: boolean;
};
// TEMP
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
    statPerks: any;
  };
}

const ChampionPage = async ({ params }: ChampionPageProps) => {
  const champUrl = `http://localhost:3200/champion/${params.champion}`;
  const champion = (await axios.get<ChampionStatsDto>(champUrl)).data;

  return (
    <div>
      <img src={`${champUrl}.png`} />
      <h1>{champion.championName}</h1>
      <div>
        {champion.items.map((x) => (
          <img
            width={80}
            height={80}
            src={`http://localhost:3200/item/${x.itemId}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default ChampionPage;
