/** @format */

import { useRef, useState, type FormEvent } from 'react';

const Form = () => {
  interface User {
    name: string;
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<User>({
    name: '',
    email: '',
    password: '',
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setFormData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={name} placeholder='Enter name' />
      <input type='text' ref={email} placeholder='Enter email' />
      <input type='password' ref={password} placeholder='Enter password' />

      <button type='submit'>Submit</button>

      <section>
        Name:{formData.name} <br />
        Email:{formData.email} <br />
        Passoword:{formData.password}
      </section>
    </form>
  );
};
export default Form;
