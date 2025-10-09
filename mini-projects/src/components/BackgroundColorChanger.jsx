/** @format */

import React, { useContext } from 'react';
import ColorContext from '../context/ColorContext';

const BackgroundColorChanger = () => {
  const { changeColor } = useContext(ColorContext);

  return (
    <div>
      <button onClick={changeColor}>Click</button>
    </div>
  );
};

export default BackgroundColorChanger;
