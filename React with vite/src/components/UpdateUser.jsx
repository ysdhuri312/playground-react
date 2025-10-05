/** @format */

import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(newName);
    setNewName('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder='Enter Name'
        />
        <button type='submit'>Update Name</button>
      </form>
    </div>
  );
};

export default UpdateUser;
