import { useState } from 'react';
import { FavoritesPokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { useFavorites } from '../../hooks';
import { Layout } from '../../layouts';

const FavoritesPage = () => {
  const { getFavorites } = useFavorites();
  const [favorites, setFavorites] = useState<number[]>(getFavorites());

  return (
    <Layout title="Pokemon - Favorites">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favorites} />
      )}
    </Layout>
  );
};
export default FavoritesPage;
