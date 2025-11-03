/** @format */

import { useState } from 'react';
import FormValidation from './components/FormValidation';
// import { darkTheme, lightTheme } from './utils/theme';
// // import Theme1 from './components/Theme1';
// import Theme2 from './components/Theme2';
// import ThemeProvider from './context/ThemeProvider';
// import Counter1 from './components/Counter1';
// import Counter2 from './components/Counter2';

const App = () => {
  // const [theme, setTheme] = useState({
  //   backgroundColor: 'blue',
  //   color: 'white',
  //   height: '100vh',
  // });

  // const themeChanger = () => {
  //   if (theme.backgroundColor === 'black') {
  //     setTheme(lightTheme);
  //   } else {
  //     setTheme(darkTheme);
  //   }
  // };

  return (
    <>
      {/* <ThemeProvider> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Theme1 themeChanger={themeChanger} theme={theme} /> */}
      {/* <Theme2 /> */}
      {/* </ThemeProvider> */}
      <FormValidation />
    </>
  );
};
export default App;
