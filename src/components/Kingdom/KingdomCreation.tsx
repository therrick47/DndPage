import { Box, Menu, MenuItem, Select, Stack, Typography } from '@mui/material';
import { Charters, Governments } from './KingdomConstants';
import React, { useEffect } from 'react';
import { KingdomAttribute } from './Kingdom.types';

export const KingdomCreation = () => {
  const [charter, setCharter] = React.useState(Charters[0]);
  const [charterBoost, setCharterBoost] = React.useState<KingdomAttribute>();
  const [heartland, setHeartland] = React.useState('');
  const [government, setGovernment] = React.useState(Governments[0]);
  useEffect(() => {
    console.log(charter);
  }, [charter]);
  useEffect(() => {
    getStats();
  }, [charter, heartland, government, charterBoost]);
  const getStats = () => {
    console.log(charter);
    console.log(heartland);
    console.log(government);
    console.log(charterBoost);
  };
  return (
    <Box>
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Typography variant='h5'>Charter</Typography>
        <Select
          label='Charter'
          autoWidth
          defaultValue={Charters[0].Name}
        >
          {Charters.map((charter) => (
            <MenuItem
              key={`charter${charter.Name}`}
              value={charter.Name}
            >
              {charter.Name}
            </MenuItem>
          ))}
        </Select>
        <Stack
          direction={'row'}
          spacing={2}
        >
          <Stack>
            <Typography variant='h6'>Ability Boost</Typography>
            <Select
              label='Ability Boost'
              autoWidth
              defaultValue={charter.AbilityBoosts[0]}
            >
              <MenuItem selected>{charter.AbilityBoosts[0]}</MenuItem>
            </Select>
          </Stack>
          {charter.AbilityBoosts.length > 1 && (
            <Stack>
              <Typography variant='h6'>Ability Boost</Typography>
              <Select
                label='Ability Boost'
                autoWidth
                value={charterBoost}
                onChange={(e) =>
                  setCharterBoost(e.target.value as KingdomAttribute)
                }
              >
                <MenuItem>{KingdomAttribute.Loyalty}</MenuItem>
                <MenuItem>{KingdomAttribute.Stability}</MenuItem>
                <MenuItem>{KingdomAttribute.Economy}</MenuItem>
                <MenuItem>{KingdomAttribute.Culture}</MenuItem>
              </Select>
            </Stack>
          )}
        </Stack>
      </Stack>
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Typography variant='h5'>Heartland</Typography>
        <Select
          label='Heartland'
          autoWidth
          value={heartland}
          onChange={(e) => setHeartland(e.target.value as string)}
        >
          <MenuItem value={'Forest'}>Forest/Swamp</MenuItem>
          <MenuItem value={'Hill'}>Hill/Plain</MenuItem>
          <MenuItem value={'Lake'}>Lake/River</MenuItem>
          <MenuItem value={'Mountain'}>Mountain/Ruins</MenuItem>
        </Select>
      </Stack>
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Typography variant='h5'>Government</Typography>
        <Select
          label='Government'
          autoWidth
          defaultValue={Governments[0].Name}
        >
          {Governments.map((gov) => (
            <MenuItem value={gov.Name}>{gov.Name}</MenuItem>
          ))}
        </Select>
      </Stack>
    </Box>
  );
};
