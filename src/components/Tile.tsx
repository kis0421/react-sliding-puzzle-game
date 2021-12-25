import * as React from "react";

const Tile = (props: { tileNumber: number }) => {
  const { tileNumber } = props;

  return <div className="tile">
    <span>{tileNumber}</span>
  </div>
}
export default Tile;