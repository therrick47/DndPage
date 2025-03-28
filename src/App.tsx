import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link, Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';
import { Alert, AlertTitle, Stack, Typography } from '@mui/material';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Battle Arena',
    icon: <DashboardIcon />,
  },
  {
    segment: 'charcreation',
    title: 'Character Creation',
    icon: <ContactsIcon />,
  },
  {
    segment: 'kingdom',
    title: 'Kingdom',
    icon: <ContactsIcon />,
    children: [
      {
        segment: 'creation',
        title: 'Creation',
      },
      {
        segment: 'actions',
        title: 'Actions',
      },
    ],
  },
];

const BRANDING = {
  title: 'DndPage',
};

export default function App() {
  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
    >
      <Alert
        severity='info'
        onClose={() => {}}
      >
        <AlertTitle>Beta</AlertTitle>
        <Stack
          direction='row'
          spacing={1}
          justifyContent={'center'}
        >
          <Typography>
            This Application is currently under development. If there are any
            features you'd like to see, please post it
          </Typography>
          <Link to={'https://github.com/therrick47/DndPage'}> here</Link>
        </Stack>
      </Alert>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
