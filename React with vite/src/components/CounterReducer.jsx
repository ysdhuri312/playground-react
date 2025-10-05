/** @format */

import React, { useReducer } from 'react';

const reducer = (counter, action) => {
  switch (action.type) {
    case 'INC':
      return counter + 1;
    case 'DEC':
      return counter - 1;
    default:
      return counter;
  }
};

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
