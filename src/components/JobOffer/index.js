import React from 'react';

const JobOffer = ({offer, filters}) => {

  return (
    <li key={offer.id} 
      className={offer.featured ? "flex flex-col bg-cyan-white rounded-lg mb-12 py-8 px-5 shadow-md border-l-4 border-cyan-dark md:flex-row md:items-center md:justify-between" : "flex flex-col bg-cyan-white rounded-lg mb-12 py-8 px-5 shadow-md md:flex-row md:items-center md:justify-between"}>
        <div className="pb-3 md:pb-0">
          <div className="border-b border-cyan-darkGrayish pb-2 relative md:border-0 md:flex md:pb-0 md:static md:gap-x-3">
            <img src={offer.logo} alt="logo" className="positioning"></img>
            <div>
            <div className="flex items-center pt-4 gap-x-2">
              <p className="font-bold text-cyan-dark">{offer.company}</p>
              <div className="flex gap-x-2">
                <span className={offer.new ? 'font-bold uppercase bg-cyan-dark text-cyan-lightGrayish rounded-full py-2 px-2 text-xs' : 'hidden'}>new!</span>
                <span className={offer.featured ? 'font-bold uppercase bg-cyan-veryDarkGrayish text-cyan-lightGrayish rounded-full py-2 px-2 text-xs' : 'hidden'}>featured</span>
              </div>
            </div>

            <p className="font-bold text-cyan-veryDarkGrayish py-4 md:hover:text-cyan-dark cursor-pointer transition duration-500 ease-in-out">{offer.position}</p>

            <div className="text-xs text-cyan-darkGrayish flex gap-x-8 items-center w-full">
              <p>{offer.postedAt}</p>
              <p className="dots">{offer.contract}</p>
              <p>{offer.location}</p>
            </div>
          </div>
            
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="btn" onClick={() => filters.setRole(offer.role)}>{offer.role}</button>
          <button className="btn" onClick={() => filters.setLevel(offer.level)}>{offer.level}</button>

        {offer.languages.map((language) => (
            <button className="btn" key={language} onClick={() => filters.addLanguage(language)}>{language}</button>
        ))}

        {offer.tools.map((tool) => (
          <button className="btn" key={tool} onClick={() => filters.addTool(tool)}>{tool}</button>
        ))}
        </div>
      </li>
  );
};


export default JobOffer;