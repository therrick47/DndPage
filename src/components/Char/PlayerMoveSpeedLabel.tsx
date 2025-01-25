import { Stack, Button } from '@mui/material';
import NumberDisplay from '../NumberDisplay';
import { MoveSpeedProps } from '../components.types';

export const PlayerMoveSpeedLabel = (props: MoveSpeedProps) => {
  return (
    <Stack
      direction={'row'}
      alignContent='space-between'
    >
      <NumberDisplay
        name='Player move speed remaining:'
        num={props.movespeed}
      ></NumberDisplay>

      <Button onClick={() => props.reset}>Refresh</Button>
    </Stack>
  );
};
