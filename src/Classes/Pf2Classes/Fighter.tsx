import { Feat } from './Feat';
import { baseClass, Proficiency } from './baseClass';
export class Fighter extends baseClass {
  constructor(level: number) {
    super(
      10,
      Proficiency.Expert,
      Proficiency.Expert,
      Proficiency.Expert,
      Proficiency.Trained,
      level,
      [],
      ['Strength', 'Dexterity']
    );
    switch (level) {
      case 1:
        this.feats.push('Attack of Opportunity', 'Shield Block');
    }
  }

  GetFirstLevelOptions: () => string[] = () => {
    return [
      'Double Slice',
      'Exacting Strike',
      'Point-Blank Shot',
      'Power Attack',
    ];
  };
}
