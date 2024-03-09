import { useState } from "react";
import "./App.css";

import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import NumberDisplay from "./components/NumberDisplay";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DecrementButton />
      <NumberDisplay count={count} />
      <IncrementButton />
    </div>
  );
};

export default App;
