import { Box, Stack } from '@mui/material';
import { BattleGrid } from './BattleGrid';
import { CombatLog } from './CombatLog';

export const BattleWrapper = () => {
  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{ height: '100%' }}
    >
      <BattleGrid gridSize={10} />
      <CombatLog />
    </Stack>
  );
};
