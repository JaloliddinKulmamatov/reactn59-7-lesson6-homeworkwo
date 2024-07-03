import React, { useState } from "react";
import "./App.css";
import ComponentC from "./Components/ComponentC";
import ComponentB from "./Components/ComponentB";
import MyInput from "./Components/MyInput";
import Container from "./Components/Container"; // Make sure Container component path is correct

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const getInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="countable">
        <ComponentC count={count} increment={increment} />
        <p>{count}</p>
        <ComponentB count={count} decrement={decrement} />
      </div>
      <div>
        <MyInput input={inputValue} getInput={getInput} />
        <p>{inputValue}</p>
        <Container style={{ backgroundColor: inputValue }}></Container>
      </div>
    </>
  );
}

export default App;
