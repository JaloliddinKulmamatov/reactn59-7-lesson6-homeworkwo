import React from "react";

const MyInput = ({ input, getInput }) => {
  return (
    <>
      <input type="text" onInput={getInput} />
    </>
  );
};

export default MyInput;
