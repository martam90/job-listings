import React from 'react';
import ButtonClear from '../ButtonClear';
import ButtonFiltered from '../ButtonFiltered';

const FilterSet = ({filter}) => {
  return (
    <div className="block shadow-md rounded-lg w-full p-6 bg-cyan-white">
      <ButtonFiltered />
      <ButtonClear/>
    </div>
  );
}




export default FilterSet;