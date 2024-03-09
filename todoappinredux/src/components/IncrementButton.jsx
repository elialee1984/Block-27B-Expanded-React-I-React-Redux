import React from "react";

import { useDispatch } from "react-redux";
import { increment } from "../store";

const IncrementButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(increment());
  };

  return <button onClick={onClick}>+</button>;
};

export default IncrementButton;
