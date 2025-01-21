import { Stack, Typography } from '@mui/material';

export const Roadmap = () => {
  const ArenaFeatures = [
    'Add player hp/stats',
    'Add monster attacks',
    'add monster movement',
    'redesign grid',
  ];
  const CharCreationFeatures = [
    'add initial layout',
    'add attributes',
    'add skills',
    'add default human fighter',
    'add race options',
    'add class options',
    'add proficencies',
    'add save/export',
    'investigate exporting to char sheet pdf',
  ];

  return (
    <Stack spacing={'5px'}>
      <Stack spacing={'3px'}>
        <Typography variant='h3'>Arena Features</Typography>
        {ArenaFeatures.map((x) => (
          <Typography>{x}</Typography>
        ))}
      </Stack>
      <Stack spacing={'3px'}>
        <Typography variant='h3'>Character Creation Features</Typography>
        {CharCreationFeatures.map((x) => (
          <Typography>{x}</Typography>
        ))}
      </Stack>
    </Stack>
  );
};
