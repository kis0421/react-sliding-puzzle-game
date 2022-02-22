import * as React from "react";

const NavigationHeader = (props: { moveCount: number }) => {
  const { moveCount } = props;
  return (
    <header style={{ height: "100px" }}>
      <div style={{ float: "right", margin: "4px 12px" }}>움직인 횟수: {moveCount}</div>
    </header>);
}

export default NavigationHeader;