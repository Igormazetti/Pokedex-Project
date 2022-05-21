export default async function getPokemons(min) {
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${min}&limit=20`;
  const request = await fetch(URL);
  const response = await request.json();
  return response.results;
}
