import React from 'react';
import iconRemove from '../../images/icon-remove.svg';

const ButtonFiltered = () => {
  return (
    <div className="flex">
      <button className="btn__filtered">
        <img src={iconRemove} alt="icon remove" className="bg-cyan-dark p-2 hover:bg-cyan-veryDarkGrayish"></img>
      </button>
    </div>
      
  );
}

export default ButtonFiltered;