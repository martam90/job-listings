import React from 'react';

const ButtonClear = ({filters}) => {
  return (
      <button className="btn__clear" onClick={() => filters.clear()}>Clear</button>
  );
}

export default ButtonClear;