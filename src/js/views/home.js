import React, { useContext, useEffect } from "react";
import { HomeSection } from "../component/HomeSection.js";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { getFinalCharacterInfo, getFinalPlanetInfo } from "../api/api.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    getFinalCharacterInfo().then((characters) => {
      actions.setCharacters(characters)  
    });
    getFinalPlanetInfo().then((planets) => {
      actions.setPlanets(planets)
    });
  }, []);

  let componentToDisplay = ""
  if (store.characters.length === 0 || store.planets.length === 0) {
    componentToDisplay = <div className="container"><div className="text-center mt-4"><h4>... Cargando...</h4> </div></div>
  } else {
    componentToDisplay = <div>
    <HomeSection sectionTitle="Characters" cards={store.characters} />
    <HomeSection sectionTitle="Planets" cards={store.planets} />
 </div>
  }
  return (
    componentToDisplay  
  );
};
