import {
  Box,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { Charters, Governments } from './KingdomConstants';
import React, { useEffect } from 'react';
import {
  KingdomAttribute,
  DisplayStat,
  Charter,
  Government,
} from './Kingdom.types';
import { StatDisplayComponent } from './StatDisplay';
import { KingdomAttributeSelect } from './KingdomAttributeSelect';
import { KingdomStatCreation } from './KingdomStatCreation';
import { KingdomSkills } from './KingdomSkills';

export const KingdomCreation = () => {
  const [government, setGovernment] = React.useState(Governments[0]);
  return (
    <Stack
      direction={'row'}
      spacing={2}
      justifyContent={'space-evenly'}
    >
      <KingdomStatCreation setValue={setGovernment}></KingdomStatCreation>
      <KingdomSkills govSkills={government.Skills}></KingdomSkills>
    </Stack>
  );
};
