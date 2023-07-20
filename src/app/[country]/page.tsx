import BreadCrumbs from '@/components/BreadCrumbs';
import Country from '@/components/Country';
import getCountry from '@/func/getCountry';
import {isCountry} from '@/interfaces/ICountry';
import {Metadata, ResolvingMetadata} from 'next';

type Props = {
  params: {country: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const id = params.country.replace(/%20| /g, ' ');
  return {
    title: `Country: ${id}`,
  };
}
export default async function Page({params}: Props) {
  const data = await getCountry(params.country);
  if (data && Array.isArray(data) && isCountry(data[0]))
    return (
      <main className="bg-white dark:bg-black min-h-screen p-10">
        <BreadCrumbs />
        <Country country={data[0]} />
      </main>
    );
  else {
    return (
      <main>
        <p>No information retrieved</p>
      </main>
    );
  }
}
