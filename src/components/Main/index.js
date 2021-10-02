import React, { useState } from 'react';
import JobOffers from '../JobOffers';
import FilterSet from '../FilterSet';

const Main = () => {

  const [toolsState, setToolsState] = useState([]);
  const [languagesState, setLanguagesState] = useState([]);
  const [levelState, setLevelState] = useState(null); // nastavujeme null, protoze string mohl by byt validni hodnotou
  const [roleState, setRoleState] = useState(null);

  // function that compares content of array a and array b. 
  //Function returns true only if all items in array a are also present in array b
  const containsArray = (a, b) => {
    for (let item of a) {
      if (!b.includes(item)) {
        return false;
      }
    }
    return true;
  };

  const filters = {
    addTool: (tool) => {
      // pokud stavova promena neobsahuje tool, vytvorime nove pole s prvkem tool
      // nejde pouzit push, protoze React se nedozvi o zmene. Musime vytvorit nove pole a pouzit funkci setToolsState
      if (toolsState.indexOf(tool) < 0) {
        setToolsState(toolsState.concat([tool]));
        
      }
    },
    addLanguage: (language) => {
      if (languagesState.indexOf(language) < 0) {
        setLanguagesState(languagesState.concat([language]));
      }
    },
    removeTool: (tool) => {
      // metoda filter vyrobi nove pole, ktere bude obsahovat vsechny prvky z puvodniho pole pro ktere anonynymi funkce vraci true. Filter prochazi jednotlive elem v poli. Napr.:
      // toolsState: ["vue", "sass", "ror"]
      // tool: "sass"
      // "vue" !== "sass" -> true
      // "sass" !== "sass" -> false
      // "ror" !== "sass" -> true
      // filter: ["vue", "ror"]
      const array = toolsState.filter(elem => elem !== tool);
      setToolsState(array);
    },
    removeLanguage: (language) => {
      const array = languagesState.filter(elem => elem !== language);
      setLanguagesState(array);
    },
    setLevel: (level) => {
      setLevelState(level); // nastavujeme konkretni hodnotu skrz funkci setLevelState
    },
    setRole: (role) => {
      setRoleState(role);
    },
    //setRole: setRoleState,
    clear: () => {
      setToolsState([]);
      setLanguagesState([]);
      setLevelState(null);
      setRoleState(null);
    },
    isSet: () => {
      // kontrolujeme jestli je nastaveny alespon jeden filter. Metoda vraci true nebo false
      return roleState !== null || levelState !== null || toolsState.length > 0 || languagesState.length > 0;
    },
    matches: (offer) => {
      // kontrolujeme jestli je zvoleny filter role a zaroven jestli filter role odpovida roli nabidky. Pokud neodpovida, vracime false.
      if (roleState !== null && roleState !== offer.role) {
        return false;
      } else if (levelState !== null && levelState !== offer.level) {
        return false;
      } else if (toolsState.length > 0 && !containsArray(toolsState, offer.tools)) { 
        return false;
      } else if (languagesState.length > 0 && !containsArray(languagesState, offer.languages)) { // Kontrolujeme, jestli existuje alespon jeden prvek v languagesState a zaroven jestli vsechny prvky z languagesState jsou v offer.languages. Pokud existuje alespon jeden prvek, ktery je v languagesState, ale neni v offer.languages, vracime false.
        return false;
      }

      return true;
    },
    tools: toolsState,
    languages: languagesState,
    role: roleState,
    level: levelState,
  };

  // komponentam FilterSet + JobOffers predavame jako props objekt filters
  return (
    <main className="bg-cyan-lightGrayish py-12 px-8 relative">
      <div className="absolute box-positioning w-full px-8">
        <FilterSet filters={filters} /> 
      </div>
      <JobOffers filters={filters}/>
    </main>
  );
}


export default Main;