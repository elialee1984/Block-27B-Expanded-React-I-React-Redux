import { useState } from "react";
import "./App.css";

import IncrementButton from "./components/IncrementButton";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <IncrementButton />
    </div>
  );
};

export default App;
