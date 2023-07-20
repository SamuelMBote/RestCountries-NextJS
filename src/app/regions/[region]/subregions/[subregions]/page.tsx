import BreadCrumbs from '@/components/BreadCrumbs';
import CountriesPanel from '@/components/CountriesPanel';
import getSubRegion from '@/func/getSubregion';
import {Metadata, ResolvingMetadata} from 'next';
import React from 'react';

type Props = {
  params: {subregions: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const id = params.subregions.replace(/%20| /g, ' ');
  return {
    title: `Subregion: ${id}`,
  };
}

export default async function Page({params}: Props) {
  const countriesofSubRegion = await getSubRegion(params.subregions);

  return (
    <main className="bg-white dark:bg-black min-h-screen p-10">
      <BreadCrumbs />
      <h1 className="text-center text-5xl ">
        {params.subregions.replace(/%20| /g, ' ')}
      </h1>
      <CountriesPanel countryList={countriesofSubRegion} />
    </main>
  );
}
