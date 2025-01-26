import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';

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
    segment: 'roadmap',
    title: 'Roadmap',
    icon: <FormatListBulletedIcon />,
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
      <Outlet />
    </ReactRouterAppProvider>
  );
}
