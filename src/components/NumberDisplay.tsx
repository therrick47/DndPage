import { Stack, Typography } from '@mui/material';
import { NumberDisplayProps } from './dnd.types';

const NumberDisplay = (props: NumberDisplayProps) => {
  return (
    <Stack direction='row'>
      <Typography
        padding='10px'
        align='center'
        fontSize='25px'
      >
        {props.name}{' '}
      </Typography>
      <Typography
        padding='10px'
        align='center'
        fontSize='25px'
      >
        {props.num}
      </Typography>
    </Stack>
  );
};
export default NumberDisplay;
