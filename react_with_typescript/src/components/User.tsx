/** @format */

import React from 'react';

interface User {
  name: string;
  age: number;
  isStudent: boolean;
}

const User: React.FC<User> = ({ name, age, isStudent }) => {
  return (
    <div>
      Username:{name} Age:{age} Student:
      {isStudent ? 'Eligible' : 'Not-Eligible'}
    </div>
  );
};

export default User;
