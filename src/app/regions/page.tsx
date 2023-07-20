import BreadCrumbs from '@/components/BreadCrumbs';
import RegionButtonsForPage from '@/components/RegionButtonsForPage';
import getAll from '@/func/getAll';
import {Metadata} from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Regions',
  description: 'Testin my habilities with Next and learning Tailwind CSS',
};
export default async function Page() {
  const allcountries = await getAll();
  return (
    <main className="bg-white dark:bg-black min-h-screen  p-10">
      <BreadCrumbs />

      <RegionButtonsForPage
        type="region"
        countryList={allcountries}
      ></RegionButtonsForPage>
    </main>
  );
}
