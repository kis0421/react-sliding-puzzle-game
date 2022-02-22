import * as React from "react";

const NavigationHeader = (props: { moveCount: number, isCompletePuzzle: boolean }) => {
  const { moveCount, isCompletePuzzle } = props;
  return (
    <header style={{ height: "100px" }}>
      <div style={{ float: "right", margin: "4px 12px" }}>움직인 횟수: {moveCount}</div>
      {isCompletePuzzle && <div style={{ clear: "both", float: "right", margin: "4px 12px", color: "green" }}>성공</div>}
    </header>);
}

export default NavigationHeader;