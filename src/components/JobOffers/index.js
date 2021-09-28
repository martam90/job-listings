import React from 'react';
import data from '../../assets/data.js';
import JobOffer from '../JobOffer/index.js';

const JobOffers = ({filters}) => {
  // v poli data filtrujeme nabidky, ktere neodpovidaji nastavenym filtrum
  return (
    <section className="mt-4">
      <ul>
      {data
        .filter((offer) => filters.matches(offer))
        .map((offer) => (
          <JobOffer offer={offer} filters={filters} key={offer.id}/>
        ))
      }
      </ul>
    </section>
  );
}

export default JobOffers;