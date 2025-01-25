import { Box, Typography, Stack } from '@mui/material';
import { BattleGrid } from './BattleArena/BattleGrid';

export default function MainPage() {
  return (
    <Box
      alignContent={'center'}
      height={'100%'}
    >
      <Typography
        variant='h2'
        padding='10px'
        align='center'
      >
        WELCOME TO THE ARENA
      </Typography>
      <Stack alignContent={'space-between'}>
        <BattleGrid gridSize={10} />
      </Stack>
    </Box>
  );
}
