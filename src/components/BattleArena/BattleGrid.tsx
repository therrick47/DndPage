import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { GridTextItem } from '../../styles/gridStyles';
import { CharIcon } from '../Char/CharIcon';
import { Button, MenuItem, Select, Stack, Typography } from '@mui/material';
import KnightIcon from '../images/KnightIcon.jpg';
import GoblinIcon from '../images/GoblinIcon.png';
import {
  getDiagonalDistance,
  GetPlayerDiagonalSpeed,
  getRandomIntInclusive,
  IsMonsterInRange,
  ValidDistance,
} from '../../Functions/CalcFunctions';
import { Weapon } from '../../Classes/Weapon';
import { WeaponList } from '../../Classes/WeaponList';
import WeaponStats from '../Char/WeaponStats';
import NumberDisplay from '../NumberDisplay';
import { PlayerMoveSpeedLabel } from '../Char/PlayerMoveSpeedLabel';

interface gridProps {
  gridSize: number;
}

export const BattleGrid = (props: gridProps) => {
  const [playerCol, setPlayerCol] = useState(0);
  const [playerRow, setPlayerRow] = useState(0);
  const [monsterCol, setMonsterCol] = useState(4);
  const [monsterRow, setMonsterRow] = useState(4);
  const [playerMoveSpeed, setPlayerMoveSpeed] = useState(30);
  const [selectedWeaponName, setSelectedWeaponName] = useState(
    WeaponList[0].name
  );
  const [monsterHp, setMonsterHp] = useState(10);

  const GetIcon = (row: number, col: number) => {
    if (row === playerRow && col === playerCol) {
      return <CharIcon source={KnightIcon} />;
    }
    if (row === monsterRow && col === monsterCol) {
      return <CharIcon source={GoblinIcon} />;
    }
  };
  const MoveMultiDirectionIfAble = (row: number, column: number) => {
    var colDiff = playerCol > column ? playerCol - column : column - playerCol;
    var rowDiff = playerRow > row ? playerRow - row : row - playerRow;
    //if new location is diagonal, we move on 5/10ft per square alterations
    if (rowDiff === colDiff) {
      //if the diff is movable with the current movespeed, update
      if (rowDiff <= GetPlayerDiagonalSpeed(playerMoveSpeed)) {
        setPlayerCol(column);
        setPlayerRow(row);
        var distance = getDiagonalDistance(rowDiff);
        setPlayerMoveSpeed(playerMoveSpeed - distance);
      }
      return;
    }
    var distanceMoved = 0;
    //calculate which diff is smaller to check for diagonal movement
    var smallDiff = rowDiff > colDiff ? colDiff : rowDiff;
    //as long as user can move diagonal, mark distance they can move
    if (smallDiff >= GetPlayerDiagonalSpeed(playerMoveSpeed)) {
      return;
    }
    rowDiff -= smallDiff;
    colDiff -= smallDiff;
    distanceMoved = getDiagonalDistance(smallDiff);
    //if the remaining movement has extra squares and is within player's movement
    //move user to new location
    if (
      (rowDiff > 0 && rowDiff * 5 + distanceMoved <= playerMoveSpeed) ||
      (colDiff > 0 && colDiff * 5 + distanceMoved <= playerMoveSpeed)
    ) {
      setPlayerRow(row);
      setPlayerCol(column);
      setPlayerMoveSpeed(
        playerMoveSpeed - distanceMoved - rowDiff * 5 - colDiff * 5
      );
    }
  };

  const getRow = (props: gridProps, column: number) => {
    const calculateMove = (column: number, row: number) => {
      if (column === monsterCol && row === monsterRow) return;

      MoveMultiDirectionIfAble(row, column);
    };

    return Array.from(Array(props.gridSize)).map((_, row) => (
      <GridTextItem
        onClick={() => {
          calculateMove(column, row);
          console.log(`coordinates: X:${column} Y:${row}`);
        }}
      >
        {GetIcon(row, column)}
      </GridTextItem>
    ));
  };
  const getBody = (props: gridProps) => {
    return Array.from(Array(props.gridSize)).map((_, column) => (
      <Grid
        size={1}
        columnSpacing={1}
        rowSpacing={1}
      >
        {getRow(props, column)}
      </Grid>
    ));
  };
  const DealDamage = () => {
    let damageDealt = 0;
    var selectedWeapon = WeaponList.find((x) => x.name === selectedWeaponName);
    if (!selectedWeapon) return;
    for (let a = 1; a <= selectedWeapon.damageDiceAmount; a++) {
      damageDealt += getRandomIntInclusive(1, selectedWeapon.damageDiceValue);
    }
    setMonsterHp(monsterHp - damageDealt);
  };
  useEffect(() => {
    if (monsterHp <= 0) {
      setPlayerCol(0);
      setPlayerRow(0);
      setMonsterCol(4);
      setMonsterRow(4);
      setMonsterHp(10);
      setPlayerMoveSpeed(30);
    }
  }, [monsterHp]);
  return (
    <Box alignSelf={'center'}>
      <Stack>
        <Grid
          height={'100%'}
          container
          columns={props.gridSize}
          spacing={1}
        >
          {getBody(props)}
        </Grid>
        <Stack>
          <PlayerMoveSpeedLabel
            movespeed={playerMoveSpeed}
            reset={() => setPlayerMoveSpeed(30)}
          />
          <NumberDisplay
            name='Monster HP:'
            num={monsterHp}
          ></NumberDisplay>
          <Stack
            direction={'row'}
            alignContent='space-between'
            spacing={'5px'}
          >
            <Select
              sx={{ width: 'auto' }}
              label='Weapon'
              onChange={(e) => setSelectedWeaponName(e.target.value)}
              value={selectedWeaponName}
              defaultValue={WeaponList[0].name}
            >
              {WeaponList.map((weapon) => (
                <MenuItem value={weapon.name}>{weapon.name}</MenuItem>
              ))}
            </Select>
            <WeaponStats
              weapon={WeaponList.find((x) => x.name === selectedWeaponName)}
            ></WeaponStats>
            {IsMonsterInRange(
              WeaponList.find((x) => x.name === selectedWeaponName) ??
                WeaponList[0],
              playerRow,
              playerCol,
              monsterRow,
              monsterCol
            ) && (
              <Stack
                direction={'row'}
                alignContent='space-between'
              >
                <Button onClick={DealDamage}>Attack</Button>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
