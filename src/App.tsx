import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Box,
  FormLabel,
  Input,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import { BattleGrid } from './components/BattleGrid';

function App() {
  return (
    <Box
      alignContent={'center'}
      height={'100%'}
    >
      <Typography
        variant='h1'
        padding='10px'
        align='center'
      >
        Welcome to the arena!
      </Typography>
      <Stack alignContent={'space-between'}>
        <BattleGrid gridSize={10} />
      </Stack>
    </Box>
  );
}

export default App;
