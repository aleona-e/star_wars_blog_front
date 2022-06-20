const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
    characters: [],
    planets: [],
    favorites: [],
    },
    actions: {
      deleteFavorite: (name) => {
        const store = getStore();
        const favoriteList = store.favorites;
        const filteredFavoriteList = favoriteList.filter((favorite) => {
          return favorite.name != name;
        });

        setStore({ favorites: filteredFavoriteList });
      },
      addFavorite: (favorite) => {
        const store = getStore();
        const favoriteList = store.favorites.concat(favorite);
        setStore({ favorites: favoriteList });
      },
      setCharacters: (characters) => {
        setStore({ characters: characters });
      },
      setPlanets: (planets) => {
        setStore({planets: planets});
      }
    },
  };
};

export default getState;
