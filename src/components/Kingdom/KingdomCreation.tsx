import {
  Box,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { Charters, Governments } from './KingdomConstants';
import React, { useEffect } from 'react';
import {
  KingdomAttribute,
  DisplayStat,
  Charter,
  Government,
} from './Kingdom.types';
import { StatDisplayComponent } from './StatDisplay';

export const KingdomCreation = () => {
  const [charter, setCharter] = React.useState(Charters[0]);
  const [charterBoost, setCharterBoost] = React.useState<KingdomAttribute>();
  const [heartland, setHeartland] = React.useState('');
  const [government, setGovernment] = React.useState(Governments[0]);
  const [govBoost, setGovBoost] = React.useState<KingdomAttribute>();
  const [firstBoost, setFirstBoost] = React.useState<KingdomAttribute>();
  const [secondBoost, setSecondBoost] = React.useState<KingdomAttribute>();

  useEffect(() => {
    console.log(charter);
  }, [charter]);
  useEffect(() => {
    getStats();
  }, [
    charter,
    heartland,
    government,
    charterBoost,
    firstBoost,
    secondBoost,
    govBoost,
  ]);

  const AddStat = (stats: DisplayStat[], attr: KingdomAttribute) => {
    return stats.map((stat) => {
      if (stat.name === attr) {
        return { name: stat.name, attr: stat.attr + 2 };
      }
      return stat;
    });
  };
  const SubtractStat = (stats: DisplayStat[], attr: KingdomAttribute) => {
    return stats.map((stat) => {
      if (stat.name === attr) {
        return { name: stat.name, attr: stat.attr - 2 };
      }
      return stat;
    });
  };

  const getStats = () => {
    var baseStats: DisplayStat[] = [
      { name: 'Loyalty', attr: 10 },
      { name: 'Stability', attr: 10 },
      { name: 'Economy', attr: 10 },
      { name: 'Culture', attr: 10 },
    ];
    baseStats = AddStat(baseStats, charter.AbilityBoosts[0]);
    if (charter.AbilityFlaw) {
      baseStats = SubtractStat(baseStats, charter.AbilityFlaw);
    }
    government.AbilityBoosts.forEach((boost) => {
      baseStats = AddStat(baseStats, boost);
    });
    if (govBoost) {
      baseStats = AddStat(baseStats, govBoost);
    }
    if (charterBoost) {
      baseStats = AddStat(baseStats, charterBoost);
    }
    if (firstBoost) {
      baseStats = AddStat(baseStats, firstBoost);
    }
    if (secondBoost) {
      baseStats = AddStat(baseStats, secondBoost);
    }
    if (heartland === 'Forest') {
      baseStats = AddStat(baseStats, KingdomAttribute.Culture);
    }
    if (heartland === 'Hill') {
      baseStats = AddStat(baseStats, KingdomAttribute.Loyalty);
    }
    if (heartland === 'Lake') {
      baseStats = AddStat(baseStats, KingdomAttribute.Economy);
    }
    if (heartland === 'Mountain') {
      baseStats = AddStat(baseStats, KingdomAttribute.Stability);
    }

    return baseStats;
  };

  return (
    <Box>
      <StatDisplayComponent attributes={getStats()}></StatDisplayComponent>
      <Card>
        <CardHeader title='Charter' />
        <Stack
          direction={'row'}
          spacing={2}
        >
          <Select
            label='Charter'
            defaultValue={Charters[0].Name}
            onChange={(e) =>
              setCharter(
                Charters.find(
                  (charter) => charter.Name === e.target.value
                ) as Charter
              )
            }
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
          <Stack>
            <Typography variant='h6'>Free Boost</Typography>
            <Select
              label='Ability Boost'
              autoWidth
              value={charterBoost}
              onChange={(e) =>
                setCharterBoost(e.target.value as KingdomAttribute)
              }
            >
              <MenuItem value={KingdomAttribute.Loyalty}>
                {KingdomAttribute.Loyalty}
              </MenuItem>
              <MenuItem value={KingdomAttribute.Stability}>
                {KingdomAttribute.Stability}
              </MenuItem>
              <MenuItem value={KingdomAttribute.Economy}>
                {KingdomAttribute.Economy}
              </MenuItem>
              <MenuItem value={KingdomAttribute.Culture}>
                {KingdomAttribute.Culture}
              </MenuItem>
            </Select>
          </Stack>
        </Stack>
      </Card>
      <Card>
        <CardHeader title='Heartland' />
        <Select
          label='Heartland'
          value={heartland}
          onChange={(e) => setHeartland(e.target.value as string)}
        >
          <MenuItem value={'Forest'}>Forest/Swamp</MenuItem>
          <MenuItem value={'Hill'}>Hill/Plain</MenuItem>
          <MenuItem value={'Lake'}>Lake/River</MenuItem>
          <MenuItem value={'Mountain'}>Mountain/Ruins</MenuItem>
        </Select>
      </Card>
      <Card>
        <CardHeader title='Government' />
        <Select
          label='Government'
          autoWidth
          defaultValue={Governments[0].Name}
          value={government.Name}
          onChange={(e) =>
            setGovernment(
              Governments.find(
                (gov) => gov.Name === e.target.value
              ) as Government
            )
          }
        >
          {Governments.map((gov) => (
            <MenuItem value={gov.Name}>{gov.Name}</MenuItem>
          ))}
        </Select>
        <Select
          label='Ability Boost'
          value={govBoost}
          onChange={(e) => setGovBoost(e.target.value as KingdomAttribute)}
        >
          <MenuItem value={KingdomAttribute.Loyalty}>
            {KingdomAttribute.Loyalty}
          </MenuItem>
          <MenuItem value={KingdomAttribute.Stability}>
            {KingdomAttribute.Stability}
          </MenuItem>
          <MenuItem value={KingdomAttribute.Economy}>
            {KingdomAttribute.Economy}
          </MenuItem>
          <MenuItem value={KingdomAttribute.Culture}>
            {KingdomAttribute.Culture}
          </MenuItem>
        </Select>
      </Card>
      <Card>
        <CardHeader title='Ability Boosts' />
        <Stack
          direction={'row'}
          spacing={2}
        >
          <Select
            label='Ability Boost'
            autoWidth
            value={firstBoost}
            onChange={(e) => setFirstBoost(e.target.value as KingdomAttribute)}
          >
            <MenuItem value={KingdomAttribute.Loyalty}>
              {KingdomAttribute.Loyalty}
            </MenuItem>
            <MenuItem value={KingdomAttribute.Stability}>
              {KingdomAttribute.Stability}
            </MenuItem>
            <MenuItem value={KingdomAttribute.Economy}>
              {KingdomAttribute.Economy}
            </MenuItem>
            <MenuItem value={KingdomAttribute.Culture}>
              {KingdomAttribute.Culture}
            </MenuItem>
          </Select>
          <Select
            label='Ability Boost'
            autoWidth
            value={secondBoost}
            onChange={(e) => setSecondBoost(e.target.value as KingdomAttribute)}
          >
            <MenuItem value={KingdomAttribute.Loyalty}>
              {KingdomAttribute.Loyalty}
            </MenuItem>
            <MenuItem value={KingdomAttribute.Stability}>
              {KingdomAttribute.Stability}
            </MenuItem>
            <MenuItem value={KingdomAttribute.Economy}>
              {KingdomAttribute.Economy}
            </MenuItem>
            <MenuItem value={KingdomAttribute.Culture}>
              {KingdomAttribute.Culture}
            </MenuItem>
          </Select>
        </Stack>
      </Card>
    </Box>
  );
};
