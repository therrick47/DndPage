import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { PdfDisplay } from './PdfDisplay';
import { useEffect, useState } from 'react';
import { Fighter } from '../../Classes/Pf2Classes/Fighter';
import { baseClass } from '../../Classes/Pf2Classes/baseClass';
import { Human } from '../../Classes/Pf2Classes/Ancestry/Human';
import { Ancestry } from '../../Classes/Pf2Classes/Ancestry/Ancestry';
import { ExportChar } from './ExportChar';
import { kvp } from '../components.types';

export const CharCreator = () => {
  const [ancestryKey, setAncestryKey] = useState('Human');
  const [ancestry, setAncestry] = useState<Ancestry>();
  const [ancestryBoosts, setAncestryBoosts] = useState<kvp[]>([]);
  const [playerClassKey, setPlayerClassKey] = useState('Fighter');
  const [playerClass, setPlayerClass] = useState<baseClass>();
  const [classBoosts, setClassBosts] = useState('');
  const [backgroundBoosts, setBackgroundBoosts] = useState('');
  useEffect(() => {
    if (!playerClassKey) return;
    if (playerClassKey === 'Fighter') {
      setPlayerClass(new Fighter(1));
      return;
    }
    setPlayerClass(new baseClass(1, 1, 1, 1, 1, 1, [], []));
  }, [playerClassKey]);

  useEffect(() => {
    if (!ancestryKey) return;
    if (ancestryKey === 'Human') {
      setAncestry(new Human());
      return;
    }
    setAncestry(new Ancestry([], '', 1, 5, 'Medium'));
  }, [ancestryKey]);

  useEffect(() => {
    if (!ancestry) return;
    setAncestryBoosts(
      ancestry.AbilityBoosts.map((x, index) => {
        return { key: index, value: '' };
      })
    );
  }, [ancestry]);

  const updateKvp = (key: number, value: any) => {
    setAncestryBoosts(
      ancestryBoosts.map((kvp) =>
        kvp.key === key ? { key: key, value: value } : kvp
      )
    );
  };

  const GetAncestryBoosts = () => {
    if (!ancestry) return;
    return (
      <Stack>
        {ancestry.AbilityBoosts.filter((option) => option !== 'Free').map(
          (option) => (
            <Select>
              <MenuItem
                key={`ancestry${option}`}
                value={option}
              >
                {option}
              </MenuItem>
            </Select>
          )
        )}
        {ancestry.AbilityBoosts.filter((option) => option === 'Free').map(
          (option, index) => (
            <Select onChange={(e) => updateKvp(index, e.target.value)}>
              <MenuItem
                key={'abilityStrength'}
                value={'Strength'}
              >
                {'Strength'}
              </MenuItem>
              <MenuItem
                key={'abilityDexterity'}
                value={'Dexterity'}
              >
                {'Dexterity'}
              </MenuItem>
              <MenuItem
                key={'abilityConstitution'}
                value={'Constitution'}
              >
                {'Constitution'}
              </MenuItem>
              <MenuItem
                key={'abilityIntelligence'}
                value={'Intelligence'}
              >
                {'Intelligence'}
              </MenuItem>
              <MenuItem
                key={'abilityWisdom'}
                value={'Wisdom'}
              >
                {'Wisdom'}
              </MenuItem>
              <MenuItem
                key={'abilityCharisma'}
                value={'Charisma'}
              >
                {'Charisma'}
              </MenuItem>
            </Select>
          )
        )}
      </Stack>
    );
  };
  const classOptions = playerClass?.keyAbility ?? [];
  return (
    <Box>
      <ExportChar
        charAncestryBoost={ancestryBoosts}
        charClassBoost={classBoosts}
      ></ExportChar>
      <Stack direction={'row'}>
        <Stack>
          <Typography variant='h6'>Class</Typography>
          <Select
            label='Class'
            autoWidth
            defaultValue={'Fighter'}
          >
            <MenuItem value={'Fighter'}>Fighter</MenuItem>
          </Select>
          {classOptions.length > 0 && (
            <Select
              label='ClassBoost'
              autoWidth
              onChange={(e) => setClassBosts(e.target.value as string)}
            >
              {classOptions.map((option) => (
                <MenuItem
                  key={`class${option}`}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        </Stack>
        <Stack>
          <Typography variant='h6'>Ancestry</Typography>
          <Select
            label='Ancestry'
            autoWidth
            defaultValue={1}
          >
            <MenuItem value={1}>Human</MenuItem>
          </Select>
          {GetAncestryBoosts()}
        </Stack>
        <Stack>
          <Typography variant='h6'>Background</Typography>
          <Select
            label='Class'
            autoWidth
            defaultValue={'Fighter'}
          >
            <MenuItem value={'Fighter'}>Acolyte</MenuItem>
          </Select>
          {classOptions.length > 0 && (
            <Select
              label='backBoost'
              autoWidth
              onChange={(e) => setBackgroundBoosts(e.target.value as string)}
            >
              {classOptions.map((option) => (
                <MenuItem
                  key={`class${option}`}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        </Stack>
      </Stack>
      {/* <PdfDisplay /> */}
    </Box>
  );
};
