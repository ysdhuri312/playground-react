/** @format */
import { useState } from 'react';
import ColorContext from './ColorContext';

const ColorState = ({ children }) => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });

  const changeColor = () => {
    const newColor = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
    setColor(newColor);
  };
  return (
    <>
      <ColorContext.Provider value={{ color, changeColor }}>
        {children}
      </ColorContext.Provider>
    </>
  );
};

export default ColorState;
