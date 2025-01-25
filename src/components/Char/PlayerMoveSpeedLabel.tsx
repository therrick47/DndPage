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
        name='Move speed:'
        num={props.movespeed}
      ></NumberDisplay>
      {props.reset && <Button onClick={() => props.reset}>Refresh</Button>}
    </Stack>
  );
};
