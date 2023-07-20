export default async function getCurrency(currencyName: string) {
  let countriesOfRegion: any[] = [];

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/currency/${currencyName}`,
      {
        next: {revalidate: 3600},
        method: 'GET',
      },
    );
    const json = await response.json();
    if (response.ok) {
      countriesOfRegion = json;
    } else {
      console.log('Not ok', response);
      throw new Error('No information retrieved');
    }
  } catch (error) {
    if (error && error instanceof Error) {
      console.log('Erro:', error);
    }
  }
  return countriesOfRegion;
}
