/** @format */

import React from 'react';
import { useState } from 'react';
import Button from '../components/Button';

function Counter() {
  const [value, setValue] = useState(0);

  const increament = () => {
    setValue(value + 1);
    return value;
  };

  const decreament = () => {
    setValue(value - 1);
    return value;
  };
  return (
    <div>
      <h1>Counter for useState and Events practice</h1>
      <p>{value}</p>
      <Button onClick={increament}>Increament</Button>
      <Button onClick={decreament}>Decreament</Button>
    </div>
  );
}

export default Counter;
