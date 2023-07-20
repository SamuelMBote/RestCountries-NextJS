import BreadCrumbs from '@/components/BreadCrumbs';
import CountriesPanel from '@/components/CountriesPanel';
import RegionButtons from '@/components/RegionButtons';
import getRegion from '@/func/getRegion';
import {Metadata, ResolvingMetadata} from 'next';
import React from 'react';
type Props = {
  params: {region: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata(
  {params}: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.region.replace(/%20| /g, ' ');
  return {
    title: `Region: ${id}`,
  };
}

export default async function Page({params}: Props) {
  const countriesofRegion = await getRegion(params.region);
  return (
    <main className="bg-white dark:bg-black min-h-screen p-10">
      <BreadCrumbs />

      <h1 className="text-center text-5xl ">{params.region}</h1>
      <RegionButtons countryList={countriesofRegion} type="subregion" />
      <CountriesPanel countryList={countriesofRegion} />
    </main>
  );
}
