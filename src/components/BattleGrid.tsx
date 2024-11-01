import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { GridTextItem } from '../styles/gridStyles';
import { PlayerIcon } from './PlayerIcon';
import { Stack } from '@mui/material';

interface gridProps {
  gridSize: number;
}

export const BattleGrid = (props: gridProps) => {
  const [playerCol, setPlayerCol] = useState(0);
  const [playerRow, setPlayerRow] = useState(0);
  const [playerMoveSpeed, setPlayerMoveSpeed] = useState(30);

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

  const getRow = (props: gridProps, column: number) => {
    const calculateMove = (column: number, row: number) => {
      if (playerCol === column) {
        if (playerRow !== row) {
          MoveRowIfAble(row);
        }
      } else if (playerRow === row) {
        if (playerCol !== column) {
          MoveColumnIfAble(column);
        }
      } else {
      }
    };

    return Array.from(Array(props.gridSize)).map((_, row) => (
      <GridTextItem
        onClick={() => {
          calculateMove(column, row);
          console.log(`coordinates: X:${column} Y:${row}`);
        }}
      >
        {row === playerRow && column === playerCol && <PlayerIcon />}
      </GridTextItem>
    ));
  };
  const getBody = (props: gridProps) => {
    return Array.from(Array(props.gridSize)).map((_, column) => (
      <Grid size={1}>{getRow(props, column)}</Grid>
    ));
  };
  return (
    <Box
      alignContent={'center'}
      width='90%'
      height='60%'
    >
      <Grid
        container
        columns={props.gridSize}
      >
        {getBody(props)}
      </Grid>
    </Box>
  );
};

// export default BattleGrid;
