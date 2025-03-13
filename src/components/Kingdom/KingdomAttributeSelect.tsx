import { Stack, Typography, Select, MenuItem } from '@mui/material';
import { KingdomAttribute } from './Kingdom.types';

export const KingdomAttributeSelect = (props: {
  value: KingdomAttribute | undefined;
  setValue: (value: KingdomAttribute) => void;
}) => {
  return (
    <Stack>
      <Typography variant='h6'>Free Boost</Typography>
      <Select
        label='Ability Boost'
        autoWidth
        value={props.value}
        onChange={(e) => props.setValue(e.target.value as KingdomAttribute)}
      >
        <MenuItem value={KingdomAttribute.Loyalty}>
          {KingdomAttribute.Loyalty}
        </MenuItem>
        <MenuItem value={KingdomAttribute.Stability}>
          {KingdomAttribute.Stability}
        </MenuItem>
        <MenuItem value={KingdomAttribute.Economy}>
          {KingdomAttribute.Economy}
        </MenuItem>
        <MenuItem value={KingdomAttribute.Culture}>
          {KingdomAttribute.Culture}
        </MenuItem>
      </Select>
    </Stack>
  );
};
