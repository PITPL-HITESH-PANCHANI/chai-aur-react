import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //   setCounter((prev) => prev + 1);
  // };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>counter or react</h1>
      <h2>counter {counter}</h2>
      <button onClick={() => counter >= 10 ? alert("Please maximum limit is 10") :  setCounter(prev => prev +1)}>Increment Value</button>
      <button onClick={() => counter > 0 && handleDecrement()}>Decrement Value</button>
    </>
  );
}

export default App;
