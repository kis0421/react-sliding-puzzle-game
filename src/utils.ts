export function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() > 0.5 ? 1 : -1);
}

export function divisionArray<T>(array: T[], unit: number) {
  const unitCount = Math.max(unit, 1);
  const tempArray = [];
  for (let i = 0; i < Math.ceil(array.length / unitCount); i++) {
    tempArray[i] = array.slice(i * unitCount, (i * unitCount) + unitCount)
  }
  return tempArray;
}

export function getAfterChangeTiles(tiles: number[][], tileNumber: number): [number[][], "left" | "top" | "right" | "bottom"] | undefined {
  const currentRowIndex = tiles.findIndex((i) => i.includes(tileNumber));
  const currentColumnIndex = tiles[currentRowIndex].findIndex((i) => i === tileNumber);
  const currentIndexes = [currentRowIndex, currentColumnIndex];

  const zeroRowIndex = tiles.findIndex((i) => i.includes(0));
  const zeroColumnIndex = tiles[zeroRowIndex].findIndex((i) => !i);
  const zeroIndexes = [zeroRowIndex, zeroColumnIndex];

  const moveDirection = currentIndexes[0] - zeroIndexes[0] === 1 && currentIndexes[1] - zeroIndexes[1] === 0
    ? "top"
    : currentIndexes[0] - zeroIndexes[0] === -1 && currentIndexes[1] - zeroIndexes[1] === 0
      ? "bottom"
      : currentIndexes[0] - zeroIndexes[0] === 0 && currentIndexes[1] - zeroIndexes[1] === 1
        ? "left"
        : currentIndexes[0] - zeroIndexes[0] === 0 && currentIndexes[1] - zeroIndexes[1] === -1
          ? "right"
          : null;

  if (moveDirection) {
    const newTiles = [...tiles];
    newTiles[currentIndexes[0]][currentIndexes[1]] = 0;
    newTiles[zeroIndexes[0]][zeroIndexes[1]] = tileNumber;
    return [newTiles, moveDirection]
  }
}