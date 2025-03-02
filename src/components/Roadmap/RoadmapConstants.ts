export type Feature = {
  featureName: string;
  completed?: boolean;
};
export const KingdomFeatures: Array<Feature> = [
  {
    featureName: 'Add kingdom creation',
  },
];
export const ArenaFeatures: Array<Feature> = [
  {
    featureName: 'Add player hp/stats',
    completed: true,
  },
  {
    featureName: 'Add monster attacks',
    completed: true,
  },
  {
    featureName: 'add monster movement',
  },
  {
    featureName: 'redesign grid',
  },
];
export const CharCreationFeatures: Array<Feature> = [
  {
    featureName: 'add initial layout',
  },
  {
    featureName: 'add attributes',
  },
  {
    featureName: 'add skills',
  },
  {
    featureName: 'add default human fighter',
  },
  {
    featureName: 'add race options',
  },
  {
    featureName: 'add class options',
  },
  {
    featureName: 'add proficencies',
  },
  {
    featureName: 'add save/export',
  },
  {
    featureName: 'investigate exporting to char sheet pdf',
  },
];
