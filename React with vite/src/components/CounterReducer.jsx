/** @format */

import React, { useReducer } from 'react';
import { reducer } from '../reducer/reducer';

function CounterReducer() {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Counter using reducer</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
    </div>
  );
}

export default CounterReducer;
