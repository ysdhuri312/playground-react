/** @format */

import React from 'react';
import type { AdminInfo } from '../types';

type adminInfoProps = {
  admin: AdminInfo;
};

const Admin: React.FC<adminInfoProps> = ({ admin }) => {
  return (
    <div>
      <p>Name: {admin.name}</p>
      <p>Id: {admin.id}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Login Date: {admin.loginDate.toLocaleString()}</p>
    </div>
  );
};

export default Admin;
