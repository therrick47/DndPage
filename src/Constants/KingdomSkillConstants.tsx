import {
  KingdomAttribute,
  KingdomSkill,
} from '../components/Kingdom/Kingdom.types';

export const KingdomSkillList: Array<KingdomSkill> = [
  {
    Name: 'Agriculture',
    KeyAbility: KingdomAttribute.Stability,
    UntrainedActions: ['Establish Farmland', 'Harvest Crops'],
  },
  {
    Name: 'Arts',
    KeyAbility: KingdomAttribute.Culture,
    UntrainedActions: ['Craft Luxuries', 'Rest and Relax*', 'Quell Unrest*'],
    TrainedActions: ['Create a Masterpiece', 'Repair Reputation (Corruption)*'],
  },
  {
    Name: 'Boating',

    KeyAbility: KingdomAttribute.Economy,
    UntrainedActions: [
      'Establish Trade Agreement*',
      'Go Fishing',
      'Rest and Relax*',
    ],
  },
  {
    Name: 'Defense',

    KeyAbility: KingdomAttribute.Stability,
    UntrainedActions: ['Fortify Hex', 'Provide Care'],
  },
  {
    Name: 'Engineering',

    KeyAbility: KingdomAttribute.Stability,
    UntrainedActions: [
      'Build Roads',
      'Clear Hex*',
      'Demolish',
      'Establish Settlement*',
      'Establish Work Site',
    ],
    TrainedActions: ['Irrigation', 'Repair Reputation (Decay)*'],
  },
  {
    Name: 'Exploration',

    KeyAbility: KingdomAttribute.Economy,
    UntrainedActions: [
      'Abandon Hex*',
      'Claim Hex*',
      'Clear Hex*',
      'Hire Adventurers',
    ],
  },
  {
    Name: 'Folklore',
    KeyAbility: KingdomAttribute.Culture,
    UntrainedActions: ['Celebrate Holiday', 'Quell Unrest*'],
  },
  {
    Name: 'Industry',

    KeyAbility: KingdomAttribute.Economy,
    UntrainedActions: [
      'Establish Settlement*',
      'Relocate Capital',
      'Trade Commodities',
    ],
  },
  {
    Name: 'Intrigue',
    KeyAbility: KingdomAttribute.Loyalty,
    UntrainedActions: [
      'Infiltration',
      'Clandestine Business',
      'New Leadership*',
      'Pledge of Fealty*',
      'Quell Unrest*',
      'Repair Reputation (Strife)*',
    ],
  },
  {
    Name: 'Magic',
    KeyAbility: KingdomAttribute.Culture,
    UntrainedActions: [
      'Quell Unrest*',
      'Establish Trade Agreement* (master)',
      'Supernatural Solution',
      'Prognostication',
    ],
  },
  {
    Name: 'Politics',
    KeyAbility: KingdomAttribute.Loyalty,
    UntrainedActions: [
      'Establish Settlement*',
      'Improve Lifestyle',
      'New Leadership*',
      'Quell Unrest*',
    ],
  },
  {
    Name: 'Scholarship',
    KeyAbility: KingdomAttribute.Culture,
    UntrainedActions: [
      'Creative Solution',
      'Establish Settlement*',
      'Rest and Relax*',
    ],
  },
  {
    Name: 'Statecraft',
    KeyAbility: KingdomAttribute.Loyalty,
    UntrainedActions: [
      'New Leadership*',
      'Pledge of Fealty*',
      'Tap Treasury',
      'Request Foreign Aid',
      'Send Diplomatic Envoy',
    ],
  },
  {
    Name: 'Trade',

    KeyAbility: KingdomAttribute.Economy,
    UntrainedActions: [
      'Capital Investment',
      'Collect Taxes',
      'Establish Trade Agreement*',
      'Repair Reputation (Crime)*',
      'Manage Trade Agreements',
      'Purchase Commodities',
      'Rest and Relax*',
    ],
  },
  {
    Name: 'Warfare',
    KeyAbility: KingdomAttribute.Loyalty,
    UntrainedActions: ['New Leadership*', 'Pledge of Fealty*', 'Quell Unrest*'],
  },
  {
    Name: 'Wilderness',

    KeyAbility: KingdomAttribute.Stability,
    UntrainedActions: [
      'Abandon Hex*',
      'Claim Hex*',
      'Gather Livestock',
      'Rest and Relax*',
    ],
  },
];
