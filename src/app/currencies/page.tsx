import BreadCrumbs from '@/components/BreadCrumbs';
import Currencies from '@/components/Currencies';

import getAll from '@/func/getAll';
import {Metadata} from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Currencies',
};
export default async function Page() {
  const allcountries = await getAll();

  return (
    <main className="bg-white dark:bg-black min-h-screen  p-10">
      <BreadCrumbs />
      <h1>All Currencies of Planet Earth</h1>
      <Currencies countryList={allcountries} />
    </main>
  );
}
