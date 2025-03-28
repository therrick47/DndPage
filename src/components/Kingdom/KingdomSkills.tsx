import { Checkbox, FormControlLabel, Grid2, Stack } from '@mui/material';
import { KingdomSkillList } from '../../Constants/KingdomSkillConstants';
import { useState } from 'react';

export const KingdomSkills = (props: { govSkills: Array<string> }) => {
  const [selectedSkills, setSelectedSkills] = useState<Array<string>>([]);
  const updateSkills = (name: string, checked: boolean) => {
    if (checked) {
      setSelectedSkills([...selectedSkills, name]);
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== name));
    }
  };

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
            control={
              <Checkbox
                name={skill.Name}
                checked={selectedSkills.includes(skill.Name)}
                disabled={
                  selectedSkills.length >= 4 &&
                  !selectedSkills.includes(skill.Name)
                }
                onChange={(e, v) =>
                  updateSkills(e.target.name, e.target.checked)
                }
              />
            }
            label={skill.Name}
          />
        );
      })}
    </Stack>
  );
};
