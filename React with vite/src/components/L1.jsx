/** @format */

import React from 'react';
import L2 from './L2';

function L1() {
  function fromL1(value) {
    return value;
  }
  return (
    <div style={{ border: '1px solid red' }}>
      <h1>From L1 {name}</h1>
      <L2 value={fromL1} />
    </div>
  );
}

export default L1;
