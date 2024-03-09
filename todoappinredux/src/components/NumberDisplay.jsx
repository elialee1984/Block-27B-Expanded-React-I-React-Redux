import React from "react";

import Header from "./Header";
import Number from "./Number";

const NumberDisplay = ({ count }) => {
  return (
    <div>
      <Header />
      <Number count={count} />
    </div>
  );
};

export default NumberDisplay;
