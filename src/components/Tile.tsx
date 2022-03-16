import * as React from "react";
import classnames from "classnames";

const Tile = (props: {
  tileNumber: number,
  isCompletePuzzle: boolean;
  setTiles: () => void
}) => {
  const { tileNumber, isCompletePuzzle, setTiles } = props;

  return <div
    onClick={() => {
      if (!isCompletePuzzle) {
        setTiles()
      }
    }}
    className={classnames("tile", { "tile-hide": tileNumber === 0 }, { "tile-done": isCompletePuzzle })} >
    <span>{tileNumber}</span>
  </div>
}
export default Tile;