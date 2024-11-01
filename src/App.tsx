import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, FormLabel, Input, InputLabel, Stack } from '@mui/material';
import { BattleGrid } from './components/BattleGrid';

function App() {
  return (
    <Box
      alignContent={'center'}
      height={'100%'}
    >
      <Stack alignContent={'center'}>
        <label>Welcome to the arena!</label>
        <BattleGrid gridSize={10} />
      </Stack>
    </Box>
  );
}

export default App;
