import React from "react";

const ComponentC = ({ count, increment }) => {
  return (
    <>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default ComponentC;
