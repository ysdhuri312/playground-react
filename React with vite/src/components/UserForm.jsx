/** @format */

import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        value={formData.name}
        name='name'
        onChange={changeHandler}
        placeholder='Enter Name'
      />
      <br />
      <input
        type='password'
        value={formData.password}
        name='password'
        onChange={changeHandler}
        placeholder='Enter Password'
      />
      <br />
      <input
        type='text'
        value={formData.email}
        name='email'
        onChange={changeHandler}
        placeholder='Enter Email'
      />
      <br />
      <input
        type='number'
        value={formData.phone}
        name='phone'
        onChange={changeHandler}
        placeholder='Enter Phone'
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default UserForm;
