import { KingdomAction } from '../components/Kingdom/Kingdom.types';

export const actionList: Array<KingdomAction> = [
  {
    Name: 'Claim Hex',
    Tags: ['Downtime', 'Region'],
    Requirements:
      'You have Reconnoitered the hex to be claimed during hexploration. This hex must be adjacent to at least one hex that’s already part of your kingdom. If the hex to be claimed contains dangerous hazards or monsters, they must first be cleared out—either via standard adventuring or the Clear Hex activity',
    critSuccess:
      ' You claim the hex and immediately add it to your territory, increasing your kingdom’s Size by 1 (this affects all statistics determined by Size; see page 38). Your occupation of the hex goes so smoothly that you can immediately attempt another Region activity.',
    success:
      ' You claim the hex and add it to your territory, increasing your kingdom’s Size by 1 (this affects all statistics determined by Size; see page 38).',
    failure: ' You fail to claim the hex.',
    critFailure:
      ' You fail to claim the hex, and a number of early settlers and explorers are lost, causing you to take a –1 circumstance penalty to Stability-based checks until the end of your next Kingdom turn.',
  },
  {
    Name: 'Clear Hex',
    Tags: ['Downtime', 'Region'],
    critSuccess:
      'You successfully clear the hex. If you spent RP to attempt this activity, you’re refunded half of the RP cost. If you were removing dangerous creatures (but not hazards) from the hex, your explorers and mercenaries recover 2 Luxury Commodities as treasure.',
    success: 'You successfully clear the hex.',
    failure: 'You fail to clear the hex.',
    critFailure:
      'You catastrophically fail to clear the hex and several workers lose their lives. Gain 1 Unrest.',
  },
  {
    Name: 'Establish Settlement',
    Tags: ['Downtime', 'Region'],
    Requirements:
      'The hex in which you’re establishing the settlement has been Cleared and doesn’t currently have a settlement (including a Freehold) in it.',
    critSuccess:
      'You establish the settlement largely with the aid of enthusiastic volunteers. Spend 1d6 RP.',
    success: 'You establish the settlement. Spend 3d6 RP.',
    failure:
      'You establish the settlement, but inefficiently and at great expense. Spend 6d6 RP.',
    critFailure: 'You fail to establish the settlement.',
  },
  {
    Name: 'Establish Trade Agreement',
    Tags: ['Downtime', 'Leadership'],
    Requirements:
      'You have diplomatic relations with the group you wish to establish an agreement with.',
    critSuccess:
      'You successfully establish a trade agreement with your target, and your merchants return with gifts! Immediately roll 2 Resource Dice, then gain RP equal to the result of roll.',
    success: 'You successfully establish a trade agreement.',
    failure:
      'Your traders reach their destination but need to sweeten the deal to secure the trade agreement. Immediately roll 2 Resource Dice, and then spend RP equal to the result of this roll. If you do so, you successfully establish a trade agreement, otherwise the attempt fails.',
    critFailure:
      'Your trade agreement is a total loss and your traders do not return. Gain 1 Unrest, and until the end of the next Kingdom turn, take a –1 circumstance penalty to all Economy-related checks.',
  },
  {
    Name: 'Focused Attention',
    Tags: ['Downtime', 'Leadership'],
    Requirements:
      'You set aside time to focus attention on aiding another leader in an activity. Choose another leader and a Kingdom skill, then attempt a DC 20 check using the chosen skill. On a success, you grant that leader a +2 circumstance bonus to one kingdom check using that skill, provided that leader attempts the skill check during the same Kingdom turn.',

    success:
      'You grant that leader a +2 circumstance bonus to one kingdom check using that skill.',
    failure: 'The attempt fails.',
  },

  {
    Name: 'New Leadership',
    Tags: ['Downtime'],
    Requirements:
      'You announce the promotion of a character into a leadership role, whether they’re a newly appointed leader or just shifting from one leadership role to another.',
    critSuccess:
      'The people love the new leader. The leader immediately provides the benefits tied to occupying the new role and gains a +1 circumstance bonus to all Kingdom skill checks they attempt before the end of the next Kingdom turn.',
    success:
      'The people accept the new leader. The leader immediately provides the benefits tied to occupying the new role.',
    failure:
      'The people are unsure about the new leader. The leader takes a –1 circumstance penalty to all checks they attempt as part of their activities during the Activity phase of each Kingdom turn. At the end of the next Kingdom turn, the leader can attempt any Loyalty-based basic skill check to ingratiate themselves with the populace. The leader may attempt this check at the end of each Kingdom turn until they succeed. Success removes this penalty, but a critical failure results in the development detailed in Critical Failure below.',
    critFailure:
      'The people reject the new leader. The leadership role is treated as vacant and you must attempt to reassign it using the New Leadership activity at the start of the next Kingdom turn. Unrest increases by 1.',
  },
];
