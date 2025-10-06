/** @format */

import React, { useEffect, useRef } from 'react';

function Ref() {
  const refElement = useRef(null);

  //   useEffect(() => {

  //   });

  function handleSubmit() {
    console.log(refElement.current);
    refElement.current.value = 'clicked....';
  }

  return (
    <>
      <div>UseReference</div>
      <input ref={refElement} />
      <button onClick={handleSubmit}>Click Me!</button>
    </>
  );
}

export default Ref;
