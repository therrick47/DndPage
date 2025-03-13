import {
  Box,
  Card,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { KingdomAction } from './Kingdom.types';
import { PropaneSharp } from '@mui/icons-material';
import { ReasonDisplay } from './ReasonDisplay';

export const ActionDisplay = (prop: KingdomAction) => {
  return (
    <Card>
      <Stack spacing={2}>
        <Typography variant='h6'>{prop.Name}</Typography>
        <Box>
          <Typography variant='body1'>Tags: </Typography>
          {prop.Tags.map((tag) => (
            <Chip label={tag} />
          ))}
        </Box>
        {prop.Requirements && (
          <ReasonDisplay
            name='Requirements: '
            value={prop.Requirements}
          />
        )}
        {prop.critSuccess && (
          <ReasonDisplay
            name='Crit Success:'
            value={prop.critSuccess}
          />
        )}
        <Divider />
        <ReasonDisplay
          name='Success:'
          value={prop.success}
        />

        <Divider />
        <ReasonDisplay
          name='Failure:'
          value={prop.failure}
        />

        <Divider />
        {prop.critFailure && (
          <ReasonDisplay
            name='Crit Failure:'
            value={prop.critFailure}
          />
        )}
      </Stack>
    </Card>
  );
};
