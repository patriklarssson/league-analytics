export interface MatchTimelineDTO {
    metadata: Metadata;
    info:     Info;
}

export interface Info {
    endOfGameResult: string;
    frameInterval:   number;
    frames:          Frame[];
    gameId:          number;
    participants:    Participant[];
}

export interface Frame {
    events:            Event[];
    participantFrames: { [key: string]: ParticipantFrame };
    timestamp:         number;
}

export interface Event {
    realTimestamp?:           number;
    timestamp:                number;
    type:                     EventType;
    itemId?:                  number;
    participantId?:           number;
    levelUpType?:             LevelUpType;
    skillSlot?:               number;
    creatorId?:               number;
    wardType?:                WardType;
    level?:                   number;
    assistingParticipantIds?: number[];
    bounty?:                  number;
    killStreakLength?:        number;
    killerId?:                number;
    position?:                Position;
    shutdownBounty?:          number;
    victimDamageDealt?:       VictimDamage[];
    victimDamageReceived?:    VictimDamage[];
    victimId?:                number;
    killType?:                string;
    afterId?:                 number;
    beforeId?:                number;
    goldGain?:                number;
    laneType?:                LaneType;
    teamId?:                  number;
    killerTeamId?:            number;
    monsterType?:             string;
    monsterSubType?:          string;
    multiKillLength?:         number;
    buildingType?:            string;
    towerType?:               string;
    actualStartTime?:         number;
    gameId?:                  number;
    winningTeam?:             number;
}

export enum LaneType {
    BotLane = "BOT_LANE",
    MidLane = "MID_LANE",
    TopLane = "TOP_LANE",
}

export enum LevelUpType {
    Normal = "NORMAL",
}

export interface Position {
    x: number;
    y: number;
}

export enum EventType {
    BuildingKill = "BUILDING_KILL",
    ChampionKill = "CHAMPION_KILL",
    ChampionSpecialKill = "CHAMPION_SPECIAL_KILL",
    EliteMonsterKill = "ELITE_MONSTER_KILL",
    GameEnd = "GAME_END",
    ItemDestroyed = "ITEM_DESTROYED",
    ItemPurchased = "ITEM_PURCHASED",
    ItemUndo = "ITEM_UNDO",
    LevelUp = "LEVEL_UP",
    ObjectiveBountyPrestart = "OBJECTIVE_BOUNTY_PRESTART",
    PauseEnd = "PAUSE_END",
    SkillLevelUp = "SKILL_LEVEL_UP",
    TurretPlateDestroyed = "TURRET_PLATE_DESTROYED",
    WardKill = "WARD_KILL",
    WardPlaced = "WARD_PLACED",
}

export interface VictimDamage {
    basic:          boolean;
    magicDamage:    number;
    name:           string;
    participantId:  number;
    physicalDamage: number;
    spellName:      string;
    spellSlot:      number;
    trueDamage:     number;
    type:           VictimDamageDealtType;
}

export enum VictimDamageDealtType {
    Minion = "MINION",
    Monster = "MONSTER",
    Other = "OTHER",
}

export enum WardType {
    BlueTrinket = "BLUE_TRINKET",
    ControlWard = "CONTROL_WARD",
    SightWard = "SIGHT_WARD",
    Undefined = "UNDEFINED",
    YellowTrinket = "YELLOW_TRINKET",
}

export interface ParticipantFrame {
    championStats:            { [key: string]: number };
    currentGold:              number;
    damageStats:              { [key: string]: number };
    goldPerSecond:            number;
    jungleMinionsKilled:      number;
    level:                    number;
    minionsKilled:            number;
    participantId:            number;
    position:                 Position;
    timeEnemySpentControlled: number;
    totalGold:                number;
    xp:                       number;
}

export interface Participant {
    participantId: number;
    puuid:         string;
}

export interface Metadata {
    dataVersion:  string;
    matchId:      string;
    participants: string[];
}
