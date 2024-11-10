import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { GridTextItem } from '../styles/gridStyles';
import { CharIcon } from './CharIcon';
import { Button, Stack, Typography } from '@mui/material';
import KnightIcon from '../images/KnightIcon.jpg';
import GoblinIcon from '../images/GoblinIcon.png';
import {
  GetPlayerDiagonalSpeed,
  ValidDistance,
} from '../Functions/CalcFunctions';

interface gridProps {
  gridSize: number;
}

export const BattleGrid = (props: gridProps) => {
  const [playerCol, setPlayerCol] = useState(0);
  const [playerRow, setPlayerRow] = useState(0);
  const [monsterCol, setMonsterCol] = useState(4);
  const [monsterRow, setMonsterRow] = useState(4);
  const [playerMoveSpeed, setPlayerMoveSpeed] = useState(30);

  const GetIcon = (row: number, col: number) => {
    if (row === playerRow && col === playerCol) {
      return <CharIcon source={KnightIcon} />;
    }
    if (row === monsterRow && col === monsterCol) {
      return <CharIcon source={GoblinIcon} />;
    }
  };
  const MoveRowIfAble = (row: number) => {
    if (ValidDistance(playerRow, row, playerMoveSpeed)) {
      setPlayerRow(row);
    }
  };
  const MoveColumnIfAble = (col: number) => {
    if (ValidDistance(playerCol, col, playerMoveSpeed)) {
      setPlayerCol(col);
    }
  };
  const MoveMultiDirectionIfAble = (row: number, column: number) => {
    var colDiff = playerCol > column ? playerCol - column : column - playerCol;
    var rowDiff = playerRow > row ? playerRow - row : row - playerRow;
    if (rowDiff === colDiff) {
      if (rowDiff <= GetPlayerDiagonalSpeed(playerMoveSpeed)) {
        setPlayerCol(column);
        setPlayerRow(row);
      }
      return;
    }
    var distanceMoved = 0;
    // if (rowDiff > 0 && colDiff > 0) {
    var smallDiff = rowDiff > colDiff ? colDiff : rowDiff;
    if (smallDiff > 0 && smallDiff <= GetPlayerDiagonalSpeed(playerMoveSpeed)) {
      rowDiff -= smallDiff;
      colDiff -= smallDiff;
      var evenOddDiff = smallDiff % 2;
      distanceMoved =
        evenOddDiff > 0
          ? ((smallDiff - 1) / 2) * 15 + 5
          : (distanceMoved = (smallDiff / 2) * 15);
    }

    if (
      (rowDiff > 0 && rowDiff * 5 + distanceMoved <= playerMoveSpeed) ||
      (colDiff > 0 && colDiff * 5 + distanceMoved <= playerMoveSpeed)
    ) {
      setPlayerRow(row);
      setPlayerCol(column);
    }
    // }
  };

  const getRow = (props: gridProps, column: number) => {
    const calculateMove = (column: number, row: number) => {
      if (column === monsterCol && row === monsterRow) return;

      MoveMultiDirectionIfAble(row, column);
      if (playerCol !== column && playerRow !== row) {
      }
      // else if (playerCol === column) {
      //   MoveRowIfAble(row);
      // } else if (playerRow === row) {
      //   MoveColumnIfAble(column);
      // }
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
  return (
    <Box alignSelf={'center'}>
      <Grid
        height={'100%'}
        container
        columns={props.gridSize}
        spacing={1}
      >
        {getBody(props)}
      </Grid>
      <Stack
        direction={'row'}
        alignContent='space-between'
      >
        <Typography
          padding='10px'
          align='center'
          fontSize='25px'
        >
          Player move speed remaining: {playerMoveSpeed}
        </Typography>
        <Button
          variant='contained'
          onClick={() => setPlayerMoveSpeed(30)}
        >
          Refresh
        </Button>
      </Stack>
    </Box>
  );
};
