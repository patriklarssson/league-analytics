import { items } from '../../utils/data-dragon';
import { Event, EventType, Participant, StatPerks } from '../league';

type ItemTimeline = {
  timestamp: number
  itemId: number
  isFullItem: boolean    
}

class ParticipantChampion {
  championName: string;
  items: ItemTimeline[]
  trinket: number;
  summonerSpells: number[];
  skillLevelOrder: number[]
  win: boolean
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

  constructor(dto: Participant, event: Event[]) {
    const primaryStyle = dto.perks.styles.find(
      ({ description }) => description === 'primaryStyle'
    );
    const subStyle = dto.perks.styles.find(
      ({ description }) => description === 'subStyle'
    );

    

    const itemTimeline: ItemTimeline[] = event.filter((x) => x.type === EventType.ItemPurchased).map((x) => ({
      itemId: x.itemId,
      isFullItem: !items.data[x.itemId]?.into,
      timestamp: x.timestamp
    }))

    // THIS DOES NOT WORK
    const skillLevelOrder = event.filter((x) => x.type === EventType.SkillLevelUp).map((c) => c.skillSlot)

    this.win = dto.win
    this.championName = dto.championName;
    this.trinket = dto.item6;
    this.items = itemTimeline
    this.skillLevelOrder = skillLevelOrder
    this.runes = {
      primary: {
        style: primaryStyle.style,
        selection: primaryStyle.selections.map(({ perk }) => perk),
      },
      secondary: {
        style: subStyle.style,
        selection: subStyle.selections.map(({ perk }) => perk),
      },
      statPerks: dto.perks.statPerks,
    };
    this.summonerSpells = [dto.summoner1Id, dto.summoner2Id];
  }
}
export { ParticipantChampion };
