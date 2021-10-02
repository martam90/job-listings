import React from 'react';
import ButtonClear from '../ButtonClear';
import Filter from '../Filter';

const FilterSet = ({filters}) => {

  return (
    <div className={filters.isSet() ? 'flex justify-between items-baseline flex-wrap gap-4 shadow-md rounded-lg w-full p-6 bg-cyan-white' : 'hidden'}>
      <div className="flex flex-wrap gap-4 items-baseline">
        {filters.role === null ? null : (
          <Filter label={filters.role} onRemove={() => filters.setRole(null)}/>
        )}
        {filters.level === null ? null : (
          <Filter label={filters.level} onRemove={() => filters.setLevel(null)}/>
        )}
        {filters.languages.map((l) => (
          <Filter label={l} key={l} onRemove={() => filters.removeLanguage(l)}/>
        ))}
        {filters.tools.map((t) => (
          <Filter label={t} key={t} onRemove={() => filters.removeTool(t)}/>
        ))}
      </div>
      <div className="flex justify-end">
        <ButtonClear filters={filters}/>
      </div>
    </div>
  );
}




export default FilterSet;