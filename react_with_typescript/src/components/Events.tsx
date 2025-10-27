/** @format */

import React, { type FormEvent } from 'react';

export default function Events() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Event object:', e);
    console.log('typeof e:', typeof e);
    console.log('e.target:', e.target);
    console.log('e.currentTarget:', e.currentTarget);
    console.log(
      'e.currentTarget instanceof HTMLFormElement:',
      e.currentTarget instanceof HTMLFormElement
    );

    // Try using form-specific methods:
    console.log('Form elements:', e.currentTarget.elements);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='username' placeholder='Enter name' />
      <button type='submit'>Submit</button>
    </form>
  );
}
