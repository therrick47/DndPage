import { Button } from '@mui/material';
import { ExportProps } from './charCreation.types';
import { PdfChar } from '../../Classes/PdfChar';
export const ExportChar = (props: ExportProps) => {
  const { charClassBoost, charAncestryBoost } = props;
  const getStats = () => {
    var stats = [10, 10, 10, 10, 10, 10];
    if (!charClassBoost || !charAncestryBoost) return stats;
    charAncestryBoost.forEach((x) => {
      switch (x.value) {
        case 'Strength':
          stats[0] += 2;
          break;
        case 'Dexterity':
          stats[1] += 2;
          break;
        case 'Constitution':
          stats[2] += 2;
          break;
        case 'Intelligence':
          stats[3] += 2;
          break;
        case 'Wisdom':
          stats[4] += 2;
          break;
        case 'Charisma':
          stats[5] += 2;
          break;
      }
    });
    switch (charClassBoost) {
      case 'Strength':
        stats[0] += 2;
        break;
      case 'Dexterity':
        stats[1] += 2;
        break;
      case 'Constitution':
        stats[2] += 2;
        break;
      case 'Intelligence':
        stats[3] += 2;
        break;
      case 'Wisdom':
        stats[4] += 2;
        break;
      case 'Charisma':
        stats[5] += 2;
        break;
    }
    return stats;
  };
  const Save = () => {
    var pdfVal: PdfChar = {};
    var stats = getStats();
    console.log(stats);
  };
  return <Button onClick={Save}>Export</Button>;
};
