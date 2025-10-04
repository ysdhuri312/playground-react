/** @format */

import React from 'react';
import L2 from './L2';

function L1() {
  return (
    <div style={{ border: '1px solid red' }}>
      <h1>From L1</h1>
      <L2 />
    </div>
  );
}

export default L1;
