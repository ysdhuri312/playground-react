/** @format */

const FormValidation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <>
      <h1>User form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type='text' />
        </label>
        <br />
        <br />
        <label>
          Email: <input type='text' />
        </label>
        <br />
        <br />
        <label>
          Password: <input type='password' />
        </label>
        <br />
        <br />
        <label>
          Confirm Password: <input type='password' />
        </label>
        <br />
        <br />
        <label>
          Gender:{' '}
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Not mentioned</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Bio: <textarea></textarea>
        </label>
        <br />
        <br />
        <label>
          Relationship Status:{' '}
          <input type='radio' name='status' value={'single'} /> Single{' '}
          <input type='radio' name='status' value={'married'} /> Married
        </label>
        <br />
        <br />
        <label>
          Hobbies: <input type='checkbox' name='hobbies' value={'reading'} />{' '}
          Reading <input type='checkbox' name='hobbies' value={'travelling'} />{' '}
          Travelling <input type='checkbox' name='hobbies' value={'none'} />{' '}
          None of above
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
export default FormValidation;
