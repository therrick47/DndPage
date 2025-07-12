import { Box, Typography, Stack } from '@mui/material';
import { BattleGrid } from './BattleArena/BattleGrid';
import { BattleWrapper } from './BattleArena/BattleWrapper';

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
        <BattleWrapper />
      </Stack>
    </Box>
  );
}
