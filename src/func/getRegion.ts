export default async function getRegion(regionName: string) {
  let countriesOfRegion: any[] = [];

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${regionName}`,
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
