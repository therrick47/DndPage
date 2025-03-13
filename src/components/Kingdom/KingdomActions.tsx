import { Autocomplete, Box, Grid2, TextField, Typography } from '@mui/material';
import { ActionDisplay } from './ActionDisplay';
import { actionList } from '../../Constants/KingdomActionConstants';
import { useMemo, useState } from 'react';

export const KingdomActions = () => {
  const [tagFilter, setTagFilter] = useState('');

  const options = useMemo(() => {
    const tags = actionList.flatMap((action) => action.Tags);
    return Array.from(new Set(tags));
  }, [actionList]);

  return (
    <Box>
      <Typography variant='h3'>Kingdom Actions</Typography>
      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Filter by tag'
          />
        )}
        onChange={(event, value) => {
          setTagFilter(value ?? '');
        }}
      />
      <Grid2
        container
        spacing={'5px'}
      >
        {tagFilter.length > 0
          ? actionList
              .filter((action) => action.Tags.includes(tagFilter))
              .map((action) => <ActionDisplay {...action} />)
          : actionList.map((action) => <ActionDisplay {...action} />)}
      </Grid2>
    </Box>
  );
};
