import { Paper, styled } from '@mui/material';

export const GridTextItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#928c8c',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '40px',
  height: '40px',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: ' #e6e6e6',
  }),
}));
