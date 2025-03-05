import { Box, Typography } from '@mui/material';
import { KingdomAttribute, StatDisplayProps } from './Kingdom.types';
import test from 'node:test';

export const StatDisplayComponent = (props: StatDisplayProps) => {
  const display = (attr: number) => {
    var test = (attr - 10) / 2;
    if (test >= 0) return `+${test}`;
    return test;
  };
  return (
    <Box>
      <Typography variant='h4'>Stats</Typography>
      <Box>
        {props.attributes.map((stat) => (
          <Typography key={stat.name}>
            {stat.name}: {stat.attr} {display(stat.attr)}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
