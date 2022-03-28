import * as React from "react";

const NavigationHeader = (props: { moveCount: number, isCompletePuzzle: boolean }) => {
  const { moveCount, isCompletePuzzle } = props;
  return (
    <header className="gameBoardHeader" >
      <div>움직인 횟수: {moveCount}</div>
      {isCompletePuzzle && <div>성공</div>}
    </header>);
}

export default NavigationHeader;