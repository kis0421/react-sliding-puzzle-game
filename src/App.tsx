import * as React from "react";
import NavigationHeader from "./components/NavigationHeader";
import Tile from "./components/Tile";

const App = () => {
  return <div id="slidingPuzzleWrap">
    <NavigationHeader />
    <div className="puzzleRowWrap">
      <Tile tileNumber={1} />
      <Tile tileNumber={2} />
      <Tile tileNumber={9} />
      <Tile tileNumber={13} />
    </div>
    <div className="puzzleRowWrap">
      <Tile tileNumber={3} />
      <Tile tileNumber={5} />
      <Tile tileNumber={8} />
      <Tile tileNumber={15} />
    </div>

  </div>;
}
export default App;
