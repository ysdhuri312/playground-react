/** @format */

import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
}

export default UserProfile;
