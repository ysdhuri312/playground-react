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
        return { count: state.count + action.payload };

      case 'DECREAMENT':
        return { count: state.count + action.payload };

      case 'INCREAMENTBY10':
        return { count: state.count + action.payload };

      case 'DECREAMENTBY10':
        return { count: state.count - action.payload };

      case 'RESET':
        return { count: state.count - action.payload };

      default:
        return state;
    }
  };

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter with useReduce hook</h1>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: 'INCREAMENT', payload: 1 });
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREAMENT', payload: 1 });
        }}
      >
        Decreament
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'INCREAMENTBY10', payload: 10 });
        }}
      >
        Increament By 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREAMENTBY10', payload: 10 });
        }}
      >
        Decreament By 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'RESET', payload: 0 });
        }}
      >
        Reset
      </button>
    </>
  );
};
export default Counter2;
