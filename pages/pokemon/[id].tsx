import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Pokemon } from '../../interfaces';
import { Layout } from '../../layouts';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Pokemon - name">
      <h1>{pokemon.name}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const ids = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
  });
  const pokemon = (await resp.json()) as Pokemon;

  return {
    props: { pokemon },
  };
};
export default PokemonPage;
