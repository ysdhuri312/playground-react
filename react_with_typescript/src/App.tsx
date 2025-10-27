/** @format */

import Button from './components/Button';
import User from './components/User';

const App = () => {
  const onClick = () => {
    alert('hello World');
  };
  return (
    <div>
      <Button lable='Click Me' onClick={onClick} disabled={true} />
      <User name='Yogesh dhuri' age={25} isStudent={false} />
    </div>
  );
};

export default App;
