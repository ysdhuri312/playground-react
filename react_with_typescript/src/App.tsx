/** @format */

import Admin from './components/Admin';
import Button from './components/Button';
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

      <Admin admin={admin} />
    </div>
  );
};

export default App;
