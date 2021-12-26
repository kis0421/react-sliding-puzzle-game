import * as React from "react";
import classnames from "classnames";

const Tile = (props: { tileNumber: number, tiles: number[][], setTiles: React.Dispatch<React.SetStateAction<number[][]>> }) => {
  const { tileNumber } = props;

  return <div className={classnames("tile", { "tile-hide": tileNumber === 0 })} >
    <span>{tileNumber}</span>
  </div>
}
export default Tile;