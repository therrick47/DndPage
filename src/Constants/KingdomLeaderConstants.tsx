import {
  KingdomAttribute,
  KingdomLeader,
} from '../components/Kingdom/Kingdom.types';

export const KingdomLeaderList: Array<KingdomLeader> = [
  {
    Name: 'RULER',
    Description:
      'The Ruler performs the kingdom’s most important ceremonies, is the kingdom’s chief diplomatic officer, serves as the signatory for all laws affecting the entire kingdom, pardons criminals when appropriate, and is responsible for appointing characters to all other high positions in the kingdom’s government.',
    KeyAbility: KingdomAttribute.Loyalty,
    VacancyPenalty:
      '–1 to all checks (this stacks with any other vacancy penalty); gain 1d4 Unrest at the start of the Kingdom turn; Control DC increases by 2',
  },
  {
    Name: 'COUNSELOR',
    Description:
      'The Counselor is a liaison between government and citizens. They study issues with academic analysis but also interpret the desires of the citizenry and present proclamations to the people in understandable ways. They also serve as an advisor to the other leaders, particularly to the Ruler.',
    KeyAbility: KingdomAttribute.Culture,
    VacancyPenalty: '–1 to all Culture-based checks',
  },
  {
    Name: 'GENERAL',
    Description:
      'The General leads the kingdom’s military, heading its armies and managing subordinate military commanders. The General is responsible for looking after the needs of the kingdom’s military and directing them in times of war.',
    KeyAbility: KingdomAttribute.Stability,
    VacancyPenalty:
      '–4 to Warfare activities (see the appendix starting on page 71)',
  },
  {
    Name: 'EMISSARY',
    Description:
      'The Emissary keeps state secrets, oversees clandestine intrigues, and deals with criminal elements within the kingdom. They manage foreign policy and interactions with other kingdoms, as well as the interactions of political organizations and power brokers at home. Whether or not your emissary is a public figure or someone who manipulates events behind the scenes, their role in the kingdom remains the same.',
    KeyAbility: KingdomAttribute.Loyalty,
    VacancyPenalty: '–1 to all Loyalty-based checks',
  },
  {
    Name: 'MAGISTER',
    Description:
      'The Magister is in charge of all things magical in the kingdom, attending to how the supernatural affects ordinary citizens. They promote higher learning in the arts of magic, whether arcane, divine, occult, or primal. They oversee any aspects of governmental bureaucracy in which magic can be of service to the kingdom’s needs and interests.',
    KeyAbility: KingdomAttribute.Culture,
    VacancyPenalty:
      '–4 to Warfare activities (see the appendix starting on page 71)',
  },
  {
    Name: 'TREASURER',
    Description:
      'The Treasurer monitors the kingdom’s funds and the state of business and industry, as well as the citizens’ confidence in the economy and the growth of the nation’s manufacturing capacity. They work to ensure a fair market for all, investigate those who take advantage of the system, and handle taxation issues.',
    KeyAbility: KingdomAttribute.Economy,
    VacancyPenalty: '–1 to all Economy-based checks',
  },
  {
    Name: 'VICEROY',
    Description:
      'The Viceroy plans and implements the kingdom’s expansion and development, both in its territories and its settlements. They manage the infrastructure of the nation, overseeing major capital improvements and growing the networks that connect the hinterlands with the cities at the nation’s heart, helping keep the kingdom moving and growing.',
    KeyAbility: KingdomAttribute.Economy,
    VacancyPenalty: '–1 to Stability-based checks',
  },
  {
    Name: 'WARDEN',
    Description:
      'The Warden monitors the safety, security, and overall health of the kingdom, its lands, and its borders. They manage scouts and patrols in the countryside, respond to local threats and menaces as needed, and oversee the kingdom’s overall defense and health.',
    KeyAbility: KingdomAttribute.Stability,
    VacancyPenalty: '–4 to Region activities',
  },
];
