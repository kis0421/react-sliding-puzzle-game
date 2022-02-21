import * as React from "react";

const NavigationHeader = (props: { moveCount: number }) => {
  const { moveCount } = props;
  return (
    <header style={{ height: "100px" }}>
      todo {moveCount}
    </header>);
}

export default NavigationHeader;