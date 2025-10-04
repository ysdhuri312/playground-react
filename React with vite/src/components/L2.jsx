/** @format */

import React from 'react';
import L3 from './L3';

function L2({ name }) {
  return (
    <div style={{ border: '1px solid green' }}>
      <h1>From L2 {name}</h1>
      <L3 name={name} />
    </div>
  );
}

export default L2;
