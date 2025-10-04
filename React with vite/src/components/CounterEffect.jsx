/** @format */

import React, { useEffect, useState } from 'react';

function CounterEffect() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = value;
  }, [value]);

  return (
    <div>
      <p>{value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default CounterEffect;
