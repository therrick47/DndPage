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
import { ArenaInfo } from '../components.types';

interface gridProps {
  gridSize: number;
}

export const BattleGrid = (props: gridProps) => {
  const [playerInfo, setPlayerInfo] = useState<ArenaInfo>({
    currentHp: 20,
    currentCol: 0,
    currentRow: 0,
    currentMoveSpeed: 30,
    selectedWeaponName: WeaponList[0].name,
    selectedWeapon: WeaponList[0],
  });
  const [monsterInfo, setMonsterInfo] = useState<ArenaInfo>({
    currentHp: 30,
    currentCol: props.gridSize - 1,
    currentRow: props.gridSize - 1,
    currentMoveSpeed: 30,
    selectedWeaponName: WeaponList[0].name,
    selectedWeapon: WeaponList[0],
  });
  const [canAttack, setCanAttack] = useState<boolean>(false);

  const selectedWeapon = useMemo(() => {
    return (
      WeaponList.find((x) => x.name === playerInfo.selectedWeaponName) ??
      WeaponList[0]
    );
  }, [playerInfo.selectedWeaponName]);
  const monsterWeapon = useMemo(() => {
    return (
      WeaponList.find((x) => x.name === monsterInfo.selectedWeaponName) ??
      WeaponList[0]
    );
  }, [monsterInfo.selectedWeaponName]);

  const GetIcon = (row: number, col: number) => {
    if (row === playerInfo.currentRow && col === playerInfo.currentCol) {
      return <CharIcon source={KnightIcon} />;
    }
    if (row === monsterInfo.currentRow && col === monsterInfo.currentCol) {
      return <CharIcon source={GoblinIcon} />;
    }
  };
  const MoveFunction = (
    row: number,
    column: number,
    info: ArenaInfo,
    setInfo: Function
  ) => {
    var colDiff = Math.abs(info.currentCol - column);
    var rowDiff = Math.abs(info.currentRow - row);

    //if new location is diagonal, we move on 5/10ft per square alterations
    if (rowDiff === colDiff) {
      //if the diff is movable with the current movespeed, update
      if (rowDiff <= GetPlayerDiagonalSpeed(info.currentMoveSpeed)) {
        var distance = getDiagonalDistance(rowDiff);
        setInfo({
          ...info,
          currentCol: column,
          currentRow: row,
          currentMoveSpeed: info.currentMoveSpeed - distance,
        });
      }
      return;
    }
    var distanceMoved = 0;
    //calculate which diff is smaller to check for diagonal movement
    var smallDiff = rowDiff > colDiff ? colDiff : rowDiff;
    //as long as user can move diagonal, mark distance they can move
    if (smallDiff >= GetPlayerDiagonalSpeed(info.currentMoveSpeed)) {
      return;
    }
    rowDiff -= smallDiff;
    colDiff -= smallDiff;
    distanceMoved = getDiagonalDistance(smallDiff);
    //if the remaining movement has extra squares and is within player's movement
    //move user to new location
    if (
      (rowDiff > 0 && rowDiff * 5 + distanceMoved <= info.currentMoveSpeed) ||
      (colDiff > 0 && colDiff * 5 + distanceMoved <= info.currentMoveSpeed)
    ) {
      var movespeed =
        info.currentMoveSpeed - distanceMoved - rowDiff * 5 - colDiff * 5;
      setInfo({
        ...info,
        currentRow: row,
        currentCol: column,
        currentMoveSpeed: movespeed,
      });
    }
  };
  const MoveMultiDirectionIfAble = (
    row: number,
    column: number,
    info: ArenaInfo,
    setInfo: Function
  ) => {
    MoveFunction(row, column, info, setInfo);
    var colDiff = Math.abs(info.currentCol - column);
    var rowDiff = Math.abs(info.currentRow - row);
    if (
      rowDiff <= playerInfo.selectedWeapon.range / 5 &&
      colDiff <= playerInfo.selectedWeapon.range / 5
    ) {
      setCanAttack(true);
    }
  };

  const getRow = (props: gridProps, column: number) => {
    const calculateMove = (column: number, row: number) => {
      if (column === monsterInfo.currentCol && row === monsterInfo.currentRow)
        return;

      MoveMultiDirectionIfAble(row, column, playerInfo, setPlayerInfo);

      setMonsterInfo({
        ...monsterInfo,
        currentMoveSpeed: 30,
      });
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
        monsterInfo.currentRow,
        monsterInfo.currentCol,
        playerInfo.currentRow,
        playerInfo.currentCol
      )
    )
      return;

    let damageDealt = 0;
    for (let a = 1; a <= selectedWeapon.damageDiceAmount; a++) {
      damageDealt += getRandomIntInclusive(1, selectedWeapon.damageDiceValue);
    }
    setPlayerInfo({
      ...playerInfo,
      currentHp: playerInfo.currentHp - damageDealt,
    });
  };
  const DealDamage = () => {
    let damageDealt = 0;

    for (let a = 1; a <= selectedWeapon.damageDiceAmount; a++) {
      damageDealt += getRandomIntInclusive(1, selectedWeapon.damageDiceValue);
    }
    setMonsterInfo({
      ...monsterInfo,
      currentHp: monsterInfo.currentHp - damageDealt,
    });
    setCanAttack(false);
  };
  useEffect(() => {
    if (monsterInfo.currentHp <= 0) {
      setMonsterInfo({
        ...monsterInfo,
        currentHp: 20,
        currentCol: props.gridSize - 1,
        currentRow: props.gridSize - 1,
      });
      setPlayerInfo({
        ...playerInfo,
        currentCol: 0,
        currentRow: 0,
        currentMoveSpeed: 30,
      });
    }
    MonsterDealDamage();
  }, [monsterInfo.currentHp]);
  useEffect(() => {
    if (playerInfo.currentHp <= 0) {
      setPlayerInfo({
        ...playerInfo,
        currentHp: 20,
        currentCol: 0,
        currentRow: 0,
        currentMoveSpeed: 30,
      });
      setMonsterInfo({
        ...monsterInfo,
        currentHp: 20,
        currentCol: props.gridSize - 1,
        currentRow: props.gridSize - 1,
      });
    }
  }, [playerInfo.currentHp]);

  const PlayerEndTurn = () => {
    setPlayerInfo({
      ...playerInfo,
      currentMoveSpeed: 30,
    });
    var rowDist = Math.abs(playerInfo.currentRow - monsterInfo.currentRow);
    var colDist = Math.abs(playerInfo.currentCol - monsterInfo.currentCol);
    if (rowDist <= 1 && colDist <= 1) {
      MonsterDealDamage();
      setCanAttack(
        IsMonsterInRange(
          selectedWeapon,
          playerInfo.currentRow,
          playerInfo.currentCol,
          monsterInfo.currentRow,
          monsterInfo.currentCol
        )
      );
      return;
    }
    rowDist = rowDist > 3 ? 3 : rowDist;
    colDist = colDist > 3 ? 3 : colDist;
    var row =
      playerInfo.currentRow < monsterInfo.currentRow ? -rowDist : rowDist;
    var column =
      playerInfo.currentCol < monsterInfo.currentCol ? -colDist : colDist;
    //move monster towards player
    MoveMultiDirectionIfAble(
      monsterInfo.currentRow + row,
      monsterInfo.currentCol + column,
      monsterInfo,
      setMonsterInfo
    );
    setCanAttack(
      IsMonsterInRange(
        selectedWeapon,
        playerInfo.currentRow,
        playerInfo.currentCol,
        monsterInfo.currentRow,
        monsterInfo.currentCol
      )
    );
  };
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
            updateWeaponFunction={(weaponName: string) =>
              setPlayerInfo({
                ...playerInfo,
                selectedWeaponName: weaponName,
                selectedWeapon:
                  WeaponList.find((x) => x.name === weaponName) ??
                  WeaponList[0],
              })
            }
            Hp={playerInfo.currentHp}
            Weapon={selectedWeapon}
            MoveSpeed={playerInfo.currentMoveSpeed}
            UpdateMoveSpeedFunction={PlayerEndTurn}
          ></CharStats>
          <CharStats
            name='Goblin'
            updateWeaponFunction={(weaponName: string) =>
              setMonsterInfo({
                ...monsterInfo,
                selectedWeaponName: weaponName,
                selectedWeapon:
                  WeaponList.find((x) => x.name === weaponName) ??
                  WeaponList[0],
              })
            }
            Hp={monsterInfo.currentHp}
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
              playerInfo.currentRow,
              playerInfo.currentCol,
              monsterInfo.currentRow,
              monsterInfo.currentCol
            ) &&
              canAttack && (
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
