/** @format */

import { useContext } from 'react';
import BackgroundColorChanger from './components/backgroundColorChanger';
import ColorContext from './context/ColorContext';

function App() {
  const { color } = useContext(ColorContext);

  const styles = {
    height: '100vh',
    backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
  };
  return (
    <div style={styles}>
      <BackgroundColorChanger />
    </div>
  );
}

export default App;
