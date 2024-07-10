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

  const dataUrl = `http://localhost:3200/cdn/14.13.1/data/en_US/champion/${params.champion}.json`;
  const data = (await axios.get(dataUrl)).data;

  const spells = data.data[params.champion].spells
  

  return (
    <div>
      <img src={`http://localhost:3200/cdn/14.13.1/img/champion/${params.champion}.png`} />
      <h1>{champion.championName}</h1>
      <div>
        {spells.map((x) => (
          <img src={`http://localhost:3200/cdn/14.13.1/img/spell/${x.image.full}`} />
        ))}
      </div>
      <div>
        {champion.items.map((x) => (
          <img
            width={80}
            height={80}
            src={`http://localhost:3200/cdn/14.13.1/img/item/${x.itemId}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default ChampionPage;
