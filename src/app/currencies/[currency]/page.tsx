import BreadCrumbs from '@/components/BreadCrumbs';
import CountriesPanel from '@/components/CountriesPanel';
import getCurrency from '@/func/getCurrency';
import {Metadata, ResolvingMetadata} from 'next';
import React from 'react';
type Props = {
  params: {currency: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata(
  {params}: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.currency.replace(/%20| /g, ' ');
  return {
    title: `Region: ${id}`,
  };
}

export default async function Page({params}: Props) {
  const countriesUsingCurrency = await getCurrency(params.currency);
  return (
    <main className="bg-white dark:bg-black min-h-screen p-10">
      <BreadCrumbs />
      <h1 className="text-center text-5xl ">
        {params.currency.replace(/%20| /g, ' ')}
      </h1>
      <CountriesPanel countryList={countriesUsingCurrency} />
    </main>
  );
}
