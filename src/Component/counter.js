import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
