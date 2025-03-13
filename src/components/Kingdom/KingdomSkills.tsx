import { Checkbox, FormControlLabel, Grid2, Stack } from '@mui/material';
import { KingdomSkillList } from '../../Constants/KingdomSkillConstants';

export const KingdomSkills = (props: { govSkills: Array<string> }) => {
  return (
    <Stack>
      {KingdomSkillList.map((skill) => {
        if (props.govSkills.includes(skill.Name)) {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked
                  required
                />
              }
              label={skill.Name}
            />
          );
        }
        return (
          <FormControlLabel
            control={<Checkbox />}
            label={skill.Name}
          />
        );
      })}
    </Stack>
  );
};
