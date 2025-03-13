export type Charter = {
  Name: string;
  Description: string;
  AbilityBoosts: Array<KingdomAttribute>;
  AbilityFlaw: KingdomAttribute | undefined;
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
export type StatDisplayProps = {
  attributes: Array<{ name: string; attr: number }>;
};
export type DisplayStat = {
  name: string;
  attr: number;
};

export type KingdomAction = {
  Name: string;
  Tags: Array<string>;
  Requirements?: string;
  critSuccess?: string;
  success: string;
  failure: string;
  critFailure?: string;
};
export type KingdomSkill = {
  Name: string;
  KeyAbility: KingdomAttribute;
  UntrainedActions: Array<string>;
  TrainedActions?: Array<string>;
};
