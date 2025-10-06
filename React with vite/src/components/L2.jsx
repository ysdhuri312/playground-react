/** @format */

import React from 'react';
// import L3 from './L3';

function L2({ value }) {
  const name = 'Yogesh Dhuri';
  console.log(value);
  value(name);
  return (
    <div style={{ border: '1px solid green' }}>
      <h1>From L2 {name}</h1>
    </div>
  );
}

export default L2;
