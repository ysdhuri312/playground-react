/** @format */

import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>Simple Counter</h1>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increament</button>
      <button onClick={() => setValue(value - 1)}>Deacrement</button>
    </>
  );
};
export default Counter;
