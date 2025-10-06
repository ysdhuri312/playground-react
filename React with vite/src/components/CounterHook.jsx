/** @format */

import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

function CounterHook() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
    </div>
  );
}

export default CounterHook;
