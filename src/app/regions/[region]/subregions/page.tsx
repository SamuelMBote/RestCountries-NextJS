import BreadCrumbs from '@/components/BreadCrumbs';
import RegionButtonsForPage from '@/components/RegionButtonsForPage';

import getRegion from '@/func/getRegion';
import {Metadata} from 'next';
import {useParams} from 'next/navigation';
import React from 'react';
export const metadata: Metadata = {
  title: 'Regions',
  description: 'Testin my habilities with Next and learning Tailwind CSS',
};
export default async function Page({params}: {params: {region: string}}) {
  const allcountries = await getRegion(params.region);
  return (
    <main className="bg-white dark:bg-black min-h-screen  p-10">
      <BreadCrumbs />
      <RegionButtonsForPage type="subregion" countryList={allcountries} />
    </main>
  );
}
