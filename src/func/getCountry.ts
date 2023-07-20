import { ICountry } from "@/interfaces/ICountry";

export default async function getCountry(countryName: string) {
  let country: ICountry | null = null;
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}
    `,
      {next: {revalidate: 3600}, method: 'GET'},
    );
    const json = await response.json();
    if (response.ok) {
      country = json;
    } else {
      console.log('Not ok', response);
      throw new Error(`Country with name: ${countryName} can't be founded`);
    }
  } catch (error) {
    if (error && error instanceof Error) {
      console.log('Erro:', error);
    }
  }
  return country;
}
