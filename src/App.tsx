import React, { useState, useRef } from "react";
import NavigationHeader from "./components/NavigationHeader";
import Tile from "./components/Tile";
import { shuffle, divisionArray } from "./utils"

const App = () => {
  const row = 4;
  const randomTiles = shuffle(new Array(Math.pow(row, 2))
    .fill(false)
    .map((_, index) => index));
  const defaultTiles = divisionArray(randomTiles, row)
  const [tiles, setTiles] = useState(defaultTiles);
  const [moveCount, setMoveCount] = useState(0);

  return <div id="slidingPuzzleWrap">
    <NavigationHeader moveCount={moveCount} />
    {tiles.map((puzzleWrap, index) =>
      <div className="puzzleRowWrap" key={index}>
        {puzzleWrap.map((tile) => {
          return <Tile tileNumber={tile} key={tile} tiles={tiles} setTiles={(tiles: number[][]) => {
            setMoveCount(moveCount + 1)
            setTiles(tiles);
          }} />
        })}
      </div>)}
  </div>;
}
export default App;
