import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../store";

const DecrementButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(decrement());
  };

  return <button onClick={onClick}>-</button>;
};

export default DecrementButton;
