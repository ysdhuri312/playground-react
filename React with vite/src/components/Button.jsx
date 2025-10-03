/** @format */

import React from 'react';

function Button({ children, onClick }) {
  const button = {
    padding: '10px 30px',
    color: 'black',
    border: '1px solid black',
    backgroundColor: 'orange',
  };
  return (
    <button style={button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
