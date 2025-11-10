/** @format */

import { useState } from 'react';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('Not mentioned');
  const [bio, setBio] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('single');
  // const [hobbies, setHobbies] = useState('');
  const [error, setError] = useState({});

  const validate = () => {
    let tempError = {};
    if (!name.trim()) tempError.name = 'Username is required';
    if (!/\S+@\S+\.\S+/.test(email)) tempError.email = 'Email is required';
    if (!password) tempError.password = 'Password is required';
    if (password !== confirmPassword)
      tempError.comparePassword = 'Password not matched';
    if (!confirmPassword)
      tempError.confirmPassword = 'Confirm password is required';
    if (!gender) tempError.gender = 'Gender is required';
    if (!bio.trim()) tempError.bio = 'Bio is required';
    if (!relationshipStatus) tempError.relationshipStatus = 'Relationship';
    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(
        name,
        email,
        password,
        confirmPassword,
        gender,
        bio,
        relationshipStatus
        // hobbies
      );
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
        <br />
        <br />
        <label>
          Email:{' '}
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
        </label>
        <br />
        <br />
        <label>
          Password:{' '}
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
        </label>
        <br />
        <br />
        <label>
          Confirm Password:{' '}
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <select onChange={(e) => setGender(e.target.value)}>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
            <option value={'Not mentioned'}>Not mentioned</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Bio:{' '}
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          {error.bio && <p style={{ color: 'red' }}>{error.bio}</p>}
        </label>
        <br />
        <br />
        <label>
          Relationship Status:{' '}
          <input
            type='radio'
            value={relationshipStatus}
            name='relationshipStatus'
            checked={relationshipStatus === 'single'}
            onChange={(e) => setRelationshipStatus('single')}
          />{' '}
          Single{' '}
          <input
            type='radio'
            value={relationshipStatus}
            name='relationshipStatus'
            onChange={(e) => setRelationshipStatus('married')}
          />{' '}
          Married
        </label>
        <br />
        <br />
        {/* <label>
          Hobbies:{' '}
          <input
            type='checkbox'
            name='hobbies'
            onChange={(e) => setHobbies('reading')}
          />{' '}
          Reading{' '}
          <input
            type='checkbox'
            name='hobbies'
            onChange={(e) => setHobbies('travelling')}
          />{' '}
          Travelling{' '}
          <input
            type='checkbox'
            name='hobbies'
            onChange={(e) => setHobbies('none')}
          />{' '}
          None of above
        </label>
        <br />
        <br /> */}
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
export default FormValidation;
