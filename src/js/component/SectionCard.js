import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const SectionCard = (props) => {

  const {store, actions} = useContext(Context);
  const card = {name: props.cardTitle, sectionType: props.cardType}
  const cardAttributes = props.attributes.slice(4,8); //this is an array
  const cardTexts = cardAttributes.map((attribute) => {
    return (
      <p className="card-text">
        <strong>{attribute.label}</strong> : {attribute.value}
      </p>
    );
  });
  const favorites = store.favorites
  const favoriteInList = favorites.find((favorite) => {
    return favorite.name === card.name
  })
  const addOrDeleteFavorite = (card) => {
    if (favoriteInList != undefined){
      actions.deleteFavorite(card.name)
    } else if (favoriteInList === undefined){
        actions.addFavorite(card)
      }
    }
  return (
    <div className="card mx-2">
      <img className="sectionImage rounded" src={props.image} />
      <div className="card-body">
        <h4 className="card-title">{props.cardTitle} </h4>
        {cardTexts}
        <Link to={"/" + props.cardType + "/" + props.cardTitle}>
          <span className="btn btn-outline-primary" role="button">
            Learn More!
          </span>
        </Link>
        <button onClick={() => {addOrDeleteFavorite(card)}}className="btn btn-outline-warning rounded ms-5">
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
};
