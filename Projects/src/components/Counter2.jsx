/** @format */

import { useReducer } from 'react';

const Counter2 = () => {
  //   const reducer = (state, action) => {
  //     if (action.type === 'INCREAMENT') {
  //       return state + 1;
  //     } else if (action.type === 'DECREAMENT') {
  //       return state - 1;
  //     } else if (action.type === 'RESET') {
  //       return 0;
  //     } else {
  //       return state;
  //     }
  //   };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREAMENT':
        return state + 1;

      case 'DECREAMENT':
        return state - 1;

      case 'RESET':
        return 0;

      default:
        return state;
    }
  };

  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter with useReduce hook</h1>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch({ type: 'INCREAMENT' });
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREAMENT' });
        }}
      >
        Decreament
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'RESET' });
        }}
      >
        Reset
      </button>
    </>
  );
};
export default Counter2;
