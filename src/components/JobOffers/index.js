import React from 'react';
import data from '../../assets/data.js';
import JobOffer from '../JobOffer/index.js';

const JobOffers = () => {

  return (
    <section className="mt-4">
      <ul>
      {data.map((offer) => (
        <JobOffer offer={offer} key={offer.id}/>
      ))}
      </ul>
    </section>
  );
}


export default JobOffers;