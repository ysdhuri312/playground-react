/** @format */

const Greeting = () => {
  const name = 'Yogesh';
  const date = new Date();
  return (
    <>
      <h1>{name}</h1>
      <p>{date.getFullYear()}</p>
    </>
  );
};

export default Greeting;
