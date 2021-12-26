import React, { useState } from "react";
import NavigationHeader from "./components/NavigationHeader";
import Tile from "./components/Tile";
import { shuffle, divisionArray } from "./utils"

const App = () => {
  const row = 4;
  const defaultTiles = divisionArray(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), row)
  const [tiles, setTiles] = useState(defaultTiles)

  return <div id="slidingPuzzleWrap">
    <NavigationHeader />
    {tiles.map((puzzleWrap, index) =>
      <div className="puzzleRowWrap" key={index}>
        {puzzleWrap.map((tile) => {
          return <Tile tileNumber={tile} key={tile} tileState={tiles} setTileState={setTiles}/>
        })}
      </div>)}
  </div>;
}
export default App;
