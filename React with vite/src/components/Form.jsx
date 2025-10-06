/** @format */

import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    console.log(name, email, password, phone);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name'
      />
      <br />
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Password'
      />
      <br />
      <input
        type='text'
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Email'
      />
      <br />
      <input
        type='number'
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Enter Phone'
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
