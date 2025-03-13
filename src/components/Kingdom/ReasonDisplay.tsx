import { Stack, Typography } from '@mui/material';

export const ReasonDisplay = (props: { name: string; value: string }) => {
  return (
    <Stack
      direction={'row'}
      spacing={2}
    >
      <Typography variant='body1'>{props.name}</Typography>
      <Typography variant='body1'>{props.value}</Typography>
    </Stack>
  );
};
