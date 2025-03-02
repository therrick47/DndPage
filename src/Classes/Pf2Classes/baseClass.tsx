export enum Proficiency {
  Untrained,
  Trained,
  Expert,
  Master,
  Legendary,
}
export class baseClass {
  baseHp: number;
  perception: Proficiency = Proficiency.Untrained;
  fortitude: Proficiency = Proficiency.Untrained;
  reflex: Proficiency = Proficiency.Untrained;
  will: Proficiency = Proficiency.Untrained;
  level: number;
  feats: string[];
  keyAbility: string[];

  constructor(
    baseHp: number,
    perception: Proficiency,
    fortitude: Proficiency,
    reflex: Proficiency,
    will: Proficiency,
    level: number,
    feats: string[],
    keyAbility: string[]
  ) {
    this.baseHp = baseHp;
    this.perception = perception;
    this.fortitude = fortitude;
    this.reflex = reflex;
    this.will = will;
    this.level = level;
    this.feats = feats;
    this.keyAbility = keyAbility;
  }

  GetFirstLevelOptions: () => string[] = () => {
    return [];
  };
}
