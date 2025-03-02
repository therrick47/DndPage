import { Description } from '@mui/icons-material';
import { Charter, Government, KingdomAttribute } from './Kingdom.types';

export const Charters: Array<Charter> = [
  {
    Name: 'Conquest',
    Description: '',
    AbilityBoosts: [KingdomAttribute.Loyalty, KingdomAttribute.Free],
    AbilityFlaw: KingdomAttribute.Culture,
  },
  {
    Name: 'Expansion',
    Description: '',
    AbilityBoosts: [KingdomAttribute.Culture, KingdomAttribute.Free],
    AbilityFlaw: KingdomAttribute.Stability,
  },
  {
    Name: 'Exploration',
    Description: '',
    AbilityBoosts: [KingdomAttribute.Stability, KingdomAttribute.Free],
    AbilityFlaw: KingdomAttribute.Economy,
  },
  {
    Name: 'Grant',
    Description: '',
    AbilityBoosts: [KingdomAttribute.Economy, KingdomAttribute.Free],
    AbilityFlaw: KingdomAttribute.Loyalty,
  },
  {
    Name: 'Open',
    Description: '',
    AbilityBoosts: [KingdomAttribute.Free],
    AbilityFlaw: KingdomAttribute.None,
  },
];
export const Governments: Array<Government> = [
  {
    Name: 'Despotism',
    Description: '',
    AbilityBoosts: [
      KingdomAttribute.Stability,
      KingdomAttribute.Economy,
      KingdomAttribute.Free,
    ],
    Skills: ['Intrigue', 'Warfare'],
    KingdomFeat: 'Crush Dissent',
  },
  {
    Name: 'Feudalism',
    Description: '',
    AbilityBoosts: [
      KingdomAttribute.Stability,
      KingdomAttribute.Culture,
      KingdomAttribute.Free,
    ],
    Skills: ['Defense', 'Trade'],
    KingdomFeat: 'Fortified Fiefs',
  },
  {
    Name: 'Yeomandry',
    Description: '',
    AbilityBoosts: [
      KingdomAttribute.Loyalty,
      KingdomAttribute.Culture,
      KingdomAttribute.Free,
    ],
    Skills: ['Agriculture', 'Wilderness'],
    KingdomFeat: 'Muddle Through',
  },
  {
    Name: 'Oligarchy',
    Description: '',
    AbilityBoosts: [
      KingdomAttribute.Loyalty,
      KingdomAttribute.Economy,
      KingdomAttribute.Free,
    ],
    Skills: ['Arts', 'Industry'],
    KingdomFeat: 'Insider Trading',
  },
  {
    Name: 'Republic',
    Description: '',
    AbilityBoosts: [
      KingdomAttribute.Stability,
      KingdomAttribute.Loyalty,
      KingdomAttribute.Free,
    ],
    Skills: ['Engineering', 'Politics'],
    KingdomFeat: 'Pull Together',
  },
  {
    Name: 'Thaumoracy',
    Description: '',
    AbilityBoosts: [
      KingdomAttribute.Economy,
      KingdomAttribute.Culture,
      KingdomAttribute.Free,
    ],
    Skills: ['Folklore', 'Magic'],
    KingdomFeat: 'Practical Magic',
  },
];
