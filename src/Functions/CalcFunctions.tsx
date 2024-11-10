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
