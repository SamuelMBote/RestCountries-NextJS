export default async function getAll() {
  let allcountries: any[] = [];

  try {
    const response = await fetch('https://restcountries.com/v3.1/all', {
      next: {revalidate: 3600},
      method: 'GET',
    });
    const json = await response.json();
    if (response.ok) {
      allcountries = json;
    } else {
      console.log('Not ok', response);
      throw new Error('No information retrieved');
    }
  } catch (error) {
    if (error && error instanceof Error) {
      console.log('Erro:', error);
    }
  }
  return allcountries;
}
