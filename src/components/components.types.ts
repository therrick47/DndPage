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
