/** @format */

import { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Not mentioned',
    bio: '',
    relationshipStatus: 'single',
  });

  const [error, setError] = useState({});

  const validate = () => {
    let tempError = {};
    if (!formData.name.trim()) tempError.name = 'Username is required';
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempError.email = 'Email is required';
    if (!formData.password) tempError.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      tempError.comparePassword = 'Password not matched';
    if (!formData.confirmPassword)
      tempError.confirmPassword = 'Confirm password is required';
    if (!formData.gender) tempError.gender = 'Gender is required';
    if (!formData.bio.trim()) tempError.bio = 'Bio is required';
    if (!formData.relationshipStatus)
      tempError.relationshipStatus = 'Relationship';
    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <>
      <h1>User form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
        <br />
        <br />
        <label>
          Email:{' '}
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
        </label>
        <br />
        <br />
        <label>
          Password:{' '}
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
        </label>
        <br />
        <br />
        <label>
          Confirm Password:{' '}
          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {error.confirmPassword && (
            <p style={{ color: 'red' }}>{error.confirmPassword}</p>
          )}
          {error.comparePassword && (
            <p style={{ color: 'red' }}>{error.comparePassword}</p>
          )}
        </label>
        <br />
        <br />
        <label>
          Gender:{' '}
          <select onChange={handleChange} name='gender'>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
            <option value={'not mentioned'}>Not mentioned</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Bio:{' '}
          <textarea
            value={formData.bio}
            name='bio'
            onChange={handleChange}
          ></textarea>
          {error.bio && <p style={{ color: 'red' }}>{error.bio}</p>}
        </label>
        <br />
        <br />
        <label>
          Relationship Status:{' '}
          <input
            type='radio'
            value={'single'}
            name='relationshipStatus'
            checked={formData.relationshipStatus === 'single'}
            onChange={handleChange}
          />{' '}
          Single{' '}
          <input
            type='radio'
            value={'married'}
            name='relationshipStatus'
            onChange={handleChange}
          />{' '}
          Married
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
export default FormValidation;
