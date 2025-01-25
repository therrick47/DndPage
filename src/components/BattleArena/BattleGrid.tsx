import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useEffect, useMemo, useState } from 'react';
import { GridTextItem } from '../../styles/gridStyles';
import { CharIcon } from '../Char/CharIcon';
import { Button, Stack } from '@mui/material';
import KnightIcon from '../../images/KnightIcon.jpg';
import GoblinIcon from '../../images/GoblinIcon.png';
import {
  getDiagonalDistance,
  GetPlayerDiagonalSpeed,
  getRandomIntInclusive,
  IsMonsterInRange,
} from '../../Functions/CalcFunctions';
import { WeaponList } from '../../Classes/WeaponList';
import { CharStats } from '../Char/CharStats';

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
  const [monsterWeaponName, setMonsterWeaponName] = useState(
    WeaponList[0].name
  );
  const [monsterHp, setMonsterHp] = useState(10);
  const [playerHp, setPlayerHp] = useState(20);
  const selectedWeapon = useMemo(() => {
    return (
      WeaponList.find((x) => x.name === selectedWeaponName) ?? WeaponList[0]
    );
  }, [selectedWeaponName]);
  const monsterWeapon = useMemo(() => {
    return (
      WeaponList.find((x) => x.name === monsterWeaponName) ?? WeaponList[0]
    );
  }, [monsterWeaponName]);

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
  const MonsterDealDamage = () => {
    if (
      !IsMonsterInRange(
        monsterWeapon,
        monsterRow,
        monsterCol,
        playerRow,
        playerCol
      )
    )
      return;

    let damageDealt = 0;
    for (let a = 1; a <= selectedWeapon.damageDiceAmount; a++) {
      damageDealt += getRandomIntInclusive(1, selectedWeapon.damageDiceValue);
    }
    setPlayerHp(playerHp - damageDealt);
  };
  const DealDamage = () => {
    let damageDealt = 0;

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
    MonsterDealDamage();
  }, [monsterHp]);
  useEffect(() => {
    setPlayerCol(0);
    setPlayerRow(0);
    setMonsterCol(4);
    setMonsterRow(4);
    setMonsterHp(10);
    setPlayerMoveSpeed(30);
    setPlayerHp(20);
  }, [playerHp]);
  return (
    <Box alignSelf={'center'}>
      <Stack
        spacing={'10px'}
        alignItems={'center'}
      >
        <Stack
          direction={'row'}
          spacing={'30px'}
        >
          <CharStats
            name='Player'
            updateWeaponFunction={setSelectedWeaponName}
            Hp={playerHp}
            Weapon={selectedWeapon}
            MoveSpeed={playerMoveSpeed}
            UpdateMoveSpeedFunction={() => setPlayerMoveSpeed(30)}
          ></CharStats>
          <CharStats
            name='Goblin'
            updateWeaponFunction={setMonsterWeaponName}
            Hp={monsterHp}
            Weapon={monsterWeapon}
          ></CharStats>
        </Stack>
        <Grid
          height={'100%'}
          container
          columns={props.gridSize}
          spacing={1}
          width={'500px'}
        >
          {getBody(props)}
        </Grid>
        <Stack>
          <Stack
            direction={'row'}
            alignContent='space-between'
            spacing={'5px'}
          >
            {IsMonsterInRange(
              selectedWeapon,
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
