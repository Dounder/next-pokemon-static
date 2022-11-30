import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (param: string) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`, {
      method: 'GET',
    });
    const data = (await resp.json()) as Pokemon;

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
