import React, { useState } from "react";

function NumberState() {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber(number + 1);
  }

  function handleDecrement() {
    setNumber(number - 1);
  }

  function reset() {
    setNumber(0);
  }

  return (
    <>
      <h2>Number is {number}</h2>
      <input type="button" onClick={handleIncrement} value="Increment" />
      <input type="button" onClick={handleDecrement} value="Decrement" />
      <input type="button" onClick={reset} value="Reset" />
    </>
  );
}

export default NumberState;
