/** @format */

import { useState } from 'react';

const State = () => {
  const [value, setValue] = useState<number>(0);

  const increament = () => setValue(value + 1);
  const decreament = () => setValue(value - 1);

  return (
    <div>
      <p>{value}</p>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  );
};
export default State;
