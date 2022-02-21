import React, { useState } from "react";
import NavigationHeader from "./components/NavigationHeader";
import Tile from "./components/Tile";
import { shuffle, divisionArray } from "./utils"

const App = () => {
  const row = 4;
  const randomTiles = shuffle(new Array(Math.pow(row, 2))
    .fill(false)
    .map((_, index) => index));
  const defaultTiles = divisionArray(randomTiles, row)
  const [tiles, setTiles] = useState(defaultTiles)

  return <div id="slidingPuzzleWrap">
    <NavigationHeader />
    {tiles.map((puzzleWrap, index) =>
      <div className="puzzleRowWrap" key={index}>
        {puzzleWrap.map((tile) => {
          return <Tile tileNumber={tile} key={tile} tiles={tiles} setTiles={setTiles} />
        })}
      </div>)}
  </div>;
}
export default App;
