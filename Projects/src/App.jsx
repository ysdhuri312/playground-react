/** @format */

import { useState } from 'react';
import Theme1 from './components/Theme1';
// import Counter1 from './components/Counter1';
// import Counter2 from './components/Counter2';

const App = () => {
  const [theme, setTheme] = useState({
    backgroundColor: 'blue',
    color: 'white',
    height: '100vh',
  });

  const themeChanger = () => {
    if (theme.backgroundColor === 'black') {
      setTheme({
        backgroundColor: 'blue',
        color: 'white',
        height: '100vh',
      });
    } else {
      setTheme({
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
      });
    }
  };

  return (
    <div style={theme}>
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      <Theme1 themeChanger={themeChanger} theme={theme} />
    </div>
  );
};
export default App;
