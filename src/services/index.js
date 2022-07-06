export default async function getPokemons(min) {
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${min}&limit=24`;
  const request = await fetch(URL);
  const response = await request.json();
  return response.results;
}

export async function getPokemonDetails(url) {
  const URL = url;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
}

export async function getEveryPokemon() {
  const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154';
  const request = await fetch(URL);
  const response = await request.json();
  return response.results;
}