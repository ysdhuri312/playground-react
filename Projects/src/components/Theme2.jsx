/** @format */

import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Theme2 = () => {
  const { themeChanger, theme } = useContext(ThemeContext);

  return (
    <div style={theme}>
      <h1>Toggle Theme</h1>
      <p>Toggle theme after button click</p>
      <button onClick={themeChanger}>Click to change theme</button>
    </div>
  );
};
export default Theme2;
