import React from "react";

import { useSelector } from "react-redux";

const Number = () => {
  const count = useSelector((state) => {
    return state.count;
  });

  return <div>{count}</div>;
};

export default Number;
