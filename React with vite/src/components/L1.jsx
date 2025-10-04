/** @format */

import React from 'react';
import L2 from './L2';

function L1({ name }) {
  return (
    <div style={{ border: '1px solid red' }}>
      <h1>From L1</h1>
      <L2 name={name} />
    </div>
  );
}

export default L1;
