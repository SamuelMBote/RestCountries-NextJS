import CountriesPanel from '@/components/CountriesPanel';
import RegionButtons from '@/components/RegionButtons';
import getAll from '@/func/getAll';

import {Metadata} from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Rest Countries',
  description: 'Testin my habilities with Next and learning Tailwind CSS',
};

export default async function Home() {
  const allcountries = await getAll();

  return (
    <main className="bg-white dark:bg-black min-h-screen  p-10">
      <h1>All Countries of Planet Earth</h1>
      <RegionButtons type="region" countryList={allcountries} />
      <CountriesPanel countryList={allcountries} />
    </main>
  );
}

