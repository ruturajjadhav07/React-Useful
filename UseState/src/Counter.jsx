import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="main-body">
      <p className="countDisplay">{count}</p>
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
