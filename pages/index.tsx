import { GetStaticProps, NextPage } from 'next';
import { PokemonList } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Layout } from '../layouts';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon - list">
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
    method: 'GET',
  });
  const { results } = (await resp.json()) as PokemonListResponse;

  const pokemons: SmallPokemon[] = results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: { pokemons },
  };
};

export default HomePage;
