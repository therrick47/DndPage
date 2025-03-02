import { Stack, Typography } from '@mui/material';
import {
  ArenaFeatures,
  CharCreationFeatures,
  KingdomFeatures,
} from './RoadmapConstants';

export const Roadmap = () => {
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
      <Stack spacing={'3px'}>
        <Typography variant='h3'>Kingdom Features</Typography>
        {KingdomFeatures.map((x) => (
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
