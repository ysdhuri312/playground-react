/** @format */

import React, { useEffect } from 'react';

function BasicEffect() {
  useEffect(() => {
    console.log('Hello World');
  });
  return <div>BasicEffect</div>;
}

export default BasicEffect;
