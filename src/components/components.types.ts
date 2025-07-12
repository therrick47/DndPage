import { Weapon } from '../Classes/Weapon';

export type MoveSpeedProps = {
  movespeed: number;
  reset?: Function;
};
export type CharStatsProps = {
  name: string;
  Hp: number;
  Weapon: Weapon;
  updateWeaponFunction: Function;
  MoveSpeed?: number;
  UpdateMoveSpeedFunction?: Function;
};

export type kvp = {
  key: number;
  value: string;
};
export type ArenaInfo = {
  currentHp: number;
  currentCol: number;
  currentRow: number;
  currentMoveSpeed: number;
  selectedWeaponName: string;
  selectedWeapon: Weapon;
};
