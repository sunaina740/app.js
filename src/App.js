import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <h1> {count - 0} </h1>
      <button onClick={incrementCount}>Click</button>
    </div>
  );
}
