import React from 'react';

const Constellation = (props) => {
  return (
      <div>
        <h2>지도</h2>
        {props.children}
      </div>
  )
};

export {Constellation};
