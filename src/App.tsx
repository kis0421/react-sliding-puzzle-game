import * as React from "react";
import NavigationHeader from "./components/NavigationHeader";
import Tile from "./components/Tile";

const App = () => {
  return <div id="slidingPuzzleWrap">
    <NavigationHeader />
    <div className="puzzleRowWrap">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>

  </div>;
}
export default App;
