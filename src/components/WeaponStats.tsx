import { Stack, Typography } from '@mui/material';
import { WeaponStatsProps } from './dnd.types';

const WeaponStats = (props: WeaponStatsProps) => {
  if (!props.weapon) {
    return <></>;
  }
  const { weapon } = props;
  const GetWeaponDamageString = () => {
    return `${weapon.damageDiceAmount}d${weapon.damageDiceValue} ${weapon.damageType}`;
  };
  const GetWeaponRangeString = () => {
    return `${weapon.range} ft`;
  };
  return (
    <Stack>
      <Stack direction={'row'}>
        <Typography>Weapon Damage: </Typography>
        <Typography>{GetWeaponDamageString()}</Typography>
      </Stack>
      <Stack direction={'row'}>
        <Typography>Weapon Range: </Typography>
        <Typography>{GetWeaponRangeString()}</Typography>
      </Stack>
    </Stack>
  );
};
export default WeaponStats;
