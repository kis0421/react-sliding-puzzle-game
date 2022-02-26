import * as React from "react";
import classnames from "classnames";

const Tile = (props: {
  tileNumber: number,
  tiles: number[][],
  isCompletePuzzle: boolean;
  setTiles: (tiles: number[][]) => void
}) => {
  const { tileNumber, tiles, isCompletePuzzle, setTiles } = props;
  const changeTile = () => {
    const currentRowIndex = tiles.findIndex((i) => i.includes(tileNumber));
    const currentColumnIndex = tiles[currentRowIndex].findIndex((i) => i === tileNumber);
    const currentIndexes = [currentRowIndex, currentColumnIndex];

    const zeroRowIndex = tiles.findIndex((i) => i.includes(0));
    const zeroColumnIndex = tiles[zeroRowIndex].findIndex((i) => !i);
    const zeroIndexes = [zeroRowIndex, zeroColumnIndex];

    if ((!Math.abs(currentIndexes[0] - zeroIndexes[0]) && Math.abs(currentIndexes[1] - zeroIndexes[1]) === 1)
      || (Math.abs(currentIndexes[0] - zeroIndexes[0]) === 1 && !Math.abs(currentIndexes[1] - zeroIndexes[1]))) {
      const newTiles = [...tiles];
      newTiles[currentIndexes[0]][currentIndexes[1]] = 0;
      newTiles[zeroIndexes[0]][zeroIndexes[1]] = tileNumber;
      setTiles(newTiles)
    }


  }
  return <div
    onClick={() => {
      if (!isCompletePuzzle) {
        changeTile()
      }
    }}
    className={classnames("tile", { "tile-hide": tileNumber === 0 }, { "tile-done": isCompletePuzzle })} >
    <span>{tileNumber}</span>
  </div>
}
export default Tile;