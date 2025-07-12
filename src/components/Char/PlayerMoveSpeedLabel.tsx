import { Stack, Button } from '@mui/material';
import NumberDisplay from '../NumberDisplay';
import { MoveSpeedProps } from '../components.types';

export const PlayerMoveSpeedLabel = (props: MoveSpeedProps) => {
  const EndTurn = () => {
    if (props.reset) {
      props.reset();
    }
  };
  return (
    <Stack
      direction={'row'}
      alignContent='space-between'
    >
      <NumberDisplay
        name='Move speed:'
        num={props.movespeed}
      ></NumberDisplay>
      {props.reset && <Button onClick={EndTurn}>End Turn</Button>}
    </Stack>
  );
};
