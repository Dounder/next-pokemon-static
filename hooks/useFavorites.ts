import { useState } from 'react';

export const useFavorites = () => {
  const getFavorites = (): number[] => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  };

  const toggleFavorite = (id: number) => {
    let favorites: number[] = getFavorites();

    favorites = favorites.includes(id)
      ? favorites.filter((pokeId) => pokeId !== id)
      : [...favorites, id];

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const existInFavorites = (id: number): boolean => getFavorites().includes(id);

  return {
    getFavorites,
    toggleFavorite,
    existInFavorites,
  };
};
