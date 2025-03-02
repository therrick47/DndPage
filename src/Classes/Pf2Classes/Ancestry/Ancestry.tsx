export class Ancestry {
  AbilityBoosts: string[];
  AbilityFlaw: string;
  hp: number;
  speed: number;
  size: string;
  constructor(
    abilityBoosts: string[],
    abilityFlaw: string,
    hp: number,
    speed: number,
    size: string
  ) {
    this.AbilityBoosts = abilityBoosts;
    this.AbilityFlaw = abilityFlaw;
    this.hp = hp;
    this.speed = speed;
    this.size = size;
  }
}
