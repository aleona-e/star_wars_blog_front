import React, { useContext } from "react";
import { Favorite } from "./Favorite.js";
import { Context } from "../store/appContext.js";

export const FavoritesMenu = () => {

  const { store } = useContext(Context);

  const favorites = store.favorites;

  let favoritesToDisplay = "";

  if (favorites.length === 0) {
    favoritesToDisplay = <ul className="text-center dropdown-menu"><li>(Empty)</li></ul>;
  } else {
    favoritesToDisplay = (
      <ul className="dropdown-menu">
        {favorites.map((favorite) => {
            return (
            <Favorite
            cardTitle={favorite.name}
            cardType={favorite.sectionType}
          />
            )
        })}
      </ul>
    );
  }
  return favoritesToDisplay;
};
