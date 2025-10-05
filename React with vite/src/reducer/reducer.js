/** @format */

export const reducer = (counter, action) => {
  switch (action.type) {
    case 'INC':
      return counter + 1;
    case 'DEC':
      return counter - 1;
    default:
      return counter;
  }
};
