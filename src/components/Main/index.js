import React, { useState } from 'react';
import JobOffers from '../JobOffers';
import FilterSet from '../FilterSet';

const Main = () => {

  return (
    <main className="bg-cyan-lightGrayish py-12 px-8 relative">
      <section className="absolute box-positioning w-full px-8">
        <FilterSet/>
      </section>
      <JobOffers />
    </main>
  );
}


export default Main;