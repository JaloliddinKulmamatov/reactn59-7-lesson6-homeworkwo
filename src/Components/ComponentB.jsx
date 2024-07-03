import React from 'react'

const ComponentB = ({ count, decrement }) => {
  return (
    <>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default ComponentB