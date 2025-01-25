import { Box, Card, MenuItem, Select, Typography } from '@mui/material';
import { CharStatsProps } from '../components.types';
import { Label } from '@mui/icons-material';
import { WeaponList } from '../../Classes/WeaponList';
import WeaponStats from './WeaponStats';
import NumberDisplay from '../NumberDisplay';
import { PlayerMoveSpeedLabel } from './PlayerMoveSpeedLabel';

export const CharStats = (props: CharStatsProps) => {
  return (
    <Card>
      <Box width={'300px'}>
        <Typography variant='h4'>{props.name}</Typography>
        {!!props.MoveSpeed && (
          <PlayerMoveSpeedLabel
            movespeed={props.MoveSpeed}
            reset={props.UpdateMoveSpeedFunction}
          />
        )}
        <NumberDisplay
          name='HP:'
          num={props.Hp}
        ></NumberDisplay>
        <Select
          sx={{ width: 'auto' }}
          label='Weapon'
          onChange={(e) => props.updateWeaponFunction(e.target.value)}
          value={props.Weapon.name}
          defaultValue={WeaponList[0].name}
        >
          {WeaponList.map((weapon) => (
            <MenuItem value={weapon.name}>{weapon.name}</MenuItem>
          ))}
        </Select>
        <WeaponStats weapon={props.Weapon}></WeaponStats>
      </Box>
    </Card>
  );
};
