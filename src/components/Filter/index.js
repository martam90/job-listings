import React from 'react';
import iconRemove from '../../images/icon-remove.svg';

const Filter = ({label, onRemove}) => {

  return (
      <button className="btn__filtered" onClick={onRemove}>
        {label}
        <img src={iconRemove} alt="icon remove" className="bg-cyan-dark p-2 hover:bg-cyan-veryDarkGrayish rounded-r"></img>
      </button>
      
  );
}

export default Filter;