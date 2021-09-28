import React from 'react';

const ButtonClear = ({filters}) => {
  return (
    <div className="flex justify-end">
      <button className="btn__clear" onClick={() => filters.clear()}>Clear</button>
    </div>
  );
}

export default ButtonClear;