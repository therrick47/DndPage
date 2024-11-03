import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { GridTextItem } from '../styles/gridStyles';
import { CharIcon } from './CharIcon';
import { Stack } from '@mui/material';
import KnightIcon from '../images/KnightIcon.jpg';
import GoblinIcon from '../images/GoblinIcon.png';

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
    if (playerRow - row >= 0 && (playerRow - row) * 5 <= playerMoveSpeed) {
      setPlayerRow(row);
    } else if (
      row - playerRow >= 0 &&
      (row - playerRow) * 5 <= playerMoveSpeed
    ) {
      setPlayerRow(row);
    }
  };
  const MoveColumnIfAble = (col: number) => {
    if (playerCol - col >= 0 && (playerCol - col) * 5 <= playerMoveSpeed) {
      setPlayerCol(col);
    } else if (
      col - playerCol >= 0 &&
      (col - playerCol) * 5 <= playerMoveSpeed
    ) {
      setPlayerCol(col);
    }
  };
  const GetPlayerDiagonalSpeed = () => {
    var tileDistance = 0;
    let hasDiagStepped = false;
    let distance = 0;
    while (distance < playerMoveSpeed) {
      console.log(
        `current move: ${playerMoveSpeed} increasing ${hasDiagStepped ? 10 : 5}`
      );
      if (distance + 5 === playerMoveSpeed && hasDiagStepped) break;
      distance += hasDiagStepped ? 10 : 5;
      hasDiagStepped = !hasDiagStepped;
      tileDistance++;
    }
    return tileDistance;
  };
  const MoveMultiDirectionIfAble = (row: number, column: number) => {
    var colDiff = playerCol > column ? playerCol - column : column - playerCol;
    var rowDiff = playerRow > row ? playerRow - row : row - playerRow;
    if (rowDiff === colDiff && rowDiff <= GetPlayerDiagonalSpeed()) {
      setPlayerCol(column);
      setPlayerRow(row);
    }
  };

  const getRow = (props: gridProps, column: number) => {
    const calculateMove = (column: number, row: number) => {
      if (column === monsterCol && row === monsterRow) return;

      if (playerCol !== column && playerRow !== row) {
        MoveMultiDirectionIfAble(row, column);
      } else if (playerCol === column) {
        MoveRowIfAble(row);
      } else if (playerRow === row) {
        MoveColumnIfAble(column);
      }
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
    </Box>
  );
};

// export default BattleGrid;
