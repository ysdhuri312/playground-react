/** @format */

import ThemeContext from './ThemeContext';
import { darkTheme, lightTheme } from '../utils/theme';
import { useState } from 'react';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const themeChanger = () => {
    if (theme.backgroundColor === 'black') {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{ themeChanger, theme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeProvider;
