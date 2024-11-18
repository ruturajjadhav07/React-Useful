/** Updater function - An updater function is a function is an function passed 
    as an argument to set state usually.
    Allow for safe updates based on previous state.
    used with multiple state updates and asynchronous functions 
    it is good practice to use updater functions. **/

import React, { useState } from "react";

function Component() {
  const [count, setCount] = useState(0);

  function increment() {
    //  setCount(count + 1); // react uses current state to update
    setCount((c) => c + 1); // by using function it takes pending state to update
    setCount((c) => c + 1);
  }

  function reset() {
    setCount(0);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <div className="content">
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="dec" onClick={decrement}>
            Decrement
          </button>
          <button className="res" onClick={reset}>
            Reset
          </button>
          <button className="inc" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Component;
