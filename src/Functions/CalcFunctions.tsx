import { transpileModule } from 'typescript';
import { Weapon } from '../Classes/Weapon';

export const ValidDistance = (
  playerCoordinate: number,
  newCoordinate: number,
  playerMoveSpeed: number
) => {
  return (
    (playerCoordinate - newCoordinate >= 0 &&
      (playerCoordinate - newCoordinate) * 5 <= playerMoveSpeed) ||
    (newCoordinate - playerCoordinate >= 0 &&
      (newCoordinate - playerCoordinate) * 5 <= playerMoveSpeed)
  );
};
export const GetPlayerDiagonalSpeed = (playerMoveSpeed: number) => {
  var tileDistance = 0;
  let hasDiagStepped = false;
  let distance = 0;
  while (distance < playerMoveSpeed) {
    console.log(
      `current move: ${playerMoveSpeed} increasing ${hasDiagStepped ? 10 : 5}`
    );
    if (distance + 5 === playerMoveSpeed && hasDiagStepped) break;
    distance += hasDiagStepped ? 10 : 5;
    hasDiagStepped = !hasDiagStepped;
    tileDistance++;
  }
  return tileDistance;
};
export const getDiagonalDistance = (tileDiff: number) => {
  var evenOddDiff = tileDiff % 2;
  return evenOddDiff > 0 ? ((tileDiff - 1) / 2) * 15 + 5 : (tileDiff / 2) * 15;
};
export const IsMonsterInRange = (
  weapon: Weapon,
  playerRow: number,
  playerCol: number,
  monsterRow: number,
  monsterCol: number
) => {
  const validDistance = weapon.range / 5;
  return (
    playerCol === monsterCol + validDistance ||
    playerCol === monsterCol - validDistance ||
    playerRow === monsterRow + validDistance ||
    playerRow === monsterRow - validDistance
  );
};
export const getRandomIntInclusive = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};
