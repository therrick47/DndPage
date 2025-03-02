import { Background } from './background';

export class Acolyte extends Background {
  constructor() {
    super(
      ['Wisdom', 'Charisma'],
      {
        Lore: true,
        Religion: true,
      },
      'Student of the Canon'
    );
  }
}
