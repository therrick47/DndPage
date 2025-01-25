import { Stack, Typography } from '@mui/material';
type Feature = {
  featureName: string;
  completed?: boolean;
};
export const Roadmap = () => {
  const ArenaFeatures: Array<Feature> = [
    {
      featureName: 'Add player hp/stats',
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
  const CharCreationFeatures: Array<Feature> = [
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

  return (
    <Stack spacing={'5px'}>
      <Stack spacing={'3px'}>
        <Typography variant='h3'>Arena Features</Typography>
        {ArenaFeatures.map((x) => (
          <Typography
            style={{ textDecoration: x.completed ? 'line-through' : 'none' }}
          >
            {x.featureName}
          </Typography>
        ))}
      </Stack>
      <Stack spacing={'3px'}>
        <Typography variant='h3'>Character Creation Features</Typography>
        {CharCreationFeatures.map((x) => (
          <Stack direction={'row'}>
            <Typography
              style={{ textDecoration: x.completed ? 'line-through' : 'none' }}
            >
              {x.featureName}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
