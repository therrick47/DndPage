import { Card, CardHeader, Stack, Select, MenuItem } from '@mui/material';
import React, { useEffect } from 'react';
import {
  KingdomAttribute,
  DisplayStat,
  Charter,
  Government,
} from './Kingdom.types';
import { KingdomAttributeSelect } from './KingdomAttributeSelect';
import { Charters, Governments } from './KingdomConstants';
import { StatDisplayComponent } from './StatDisplay';

export const KingdomStatCreation = (props: {
  setValue: (value: Government) => void;
}) => {
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
    <Stack
      width={'40%'}
      justifyContent={'center'}
    >
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
          <KingdomAttributeSelect
            value={charterBoost}
            setValue={setCharterBoost}
          ></KingdomAttributeSelect>
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
        <Stack
          direction={'row'}
          spacing={2}
        >
          <Select
            label='Government'
            autoWidth
            defaultValue={Governments[0].Name}
            value={government.Name}
            onChange={(e) => {
              const gov = Governments.find(
                (gov) => gov.Name === e.target.value
              ) as Government;
              setGovernment(gov);
              props.setValue(gov);
            }}
          >
            {Governments.map((gov) => (
              <MenuItem value={gov.Name}>{gov.Name}</MenuItem>
            ))}
          </Select>

          <KingdomAttributeSelect
            value={govBoost}
            setValue={setGovBoost}
          ></KingdomAttributeSelect>
        </Stack>
      </Card>
      <Card>
        <CardHeader title='Ability Boosts' />
        <Stack
          direction={'row'}
          spacing={2}
        >
          <KingdomAttributeSelect
            value={firstBoost}
            setValue={setFirstBoost}
          ></KingdomAttributeSelect>
          <KingdomAttributeSelect
            value={secondBoost}
            setValue={setSecondBoost}
          ></KingdomAttributeSelect>
        </Stack>
      </Card>
    </Stack>
  );
};
