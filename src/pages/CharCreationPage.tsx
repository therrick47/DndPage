import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import pdfToText from 'react-pdftotext';
import { PDFDocument } from 'pdf-lib';
import { CharCreator } from '../components/CharCreation/CharCreator';

export default function CharCreationPage() {
  return (
    <Box>
      <Typography>Character Creation Placeholder</Typography>
      <CharCreator />
    </Box>
  );
}
