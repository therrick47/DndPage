export type Charter = {
  Name: string;
  Description: string;
  AbilityBoosts: Array<KingdomAttribute>;
  AbilityFlaw: KingdomAttribute;
};
export enum KingdomAttribute {
  Loyalty = 'Loyalty',
  Stability = 'Stability',
  Economy = 'Economy',
  Culture = 'Culture',
  Free = 'Free',
  None = 'None',
}
export type Government = {
  Name: string;
  Description: string;
  AbilityBoosts: Array<KingdomAttribute>;
  Skills: Array<string>;
  KingdomFeat: string;
};
