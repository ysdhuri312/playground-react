/** @format */

const Theme1 = ({ themeChanger, theme }) => {
  return (
    <div style={theme}>
      <h1>Toggle Theme</h1>
      <p>Toggle theme after button click</p>
      <button onClick={themeChanger}>Click to change theme</button>
    </div>
  );
};
export default Theme1;
