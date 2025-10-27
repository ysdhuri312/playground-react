/** @format */

import Admin from './components/Admin';
import Button from './components/Button';
import Form from './components/Form';
import State from './components/State';
import User from './components/User';
import type { AdminInfo } from './types';

const App = () => {
  const admin: AdminInfo = {
    id: 2,
    name: 'Yogesh Dhuri',
    email: 'yoogesh@google.com',
    role: 'admin',
    loginDate: new Date(),
  };

  return (
    <div>
      <Button
        lable='Click Me'
        onClick={() => alert('hello World')}
        disabled={true}
      />
      <User name='Yogesh dhuri' age={25} isStudent={false} />
      <br />
      <Admin admin={admin} />
      <br />
      <State />
      <br />
      <Form />
    </div>
  );
};

export default App;
