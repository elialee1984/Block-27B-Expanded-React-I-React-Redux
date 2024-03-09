// import { useState } from "react";
import "./App.css";

import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import NumberDisplay from "./components/NumberDisplay";

import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => {
    return state.count;
  });

  return (
    <div>
      <DecrementButton />
      <NumberDisplay count={count} />
      <IncrementButton />
    </div>
  );
};

export default App;
