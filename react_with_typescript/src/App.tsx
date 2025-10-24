/** @format */

import Button from './components/Button';

const App = () => {
  const onClick = () => {
    alert('hello World');
  };
  return (
    <div>
      <Button lable='Click Me' onClick={onClick} disabled={false} />
    </div>
  );
};

export default App;
