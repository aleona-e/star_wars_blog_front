import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const SectionCard = (props) => {

  const {store, actions} = useContext(Context);
  const favorites = store.favorites
  const outlineClassName = "btn btn-outline-warning rounded ms-5"
  const plainClassName = "btn btn-warning rounded ms-5"
  const card = {name: props.cardTitle, sectionType: props.cardType}
  const favoriteInList = favorites.find((favorite) => {
    return favorite.name === card.name
  })
  let favInListClassName = favoriteInList === undefined ? outlineClassName : plainClassName
  const [buttonClassName, setButtonClassname] = useState(favInListClassName)
  const cardAttributes = props.attributes.slice(4,8); //this is an array
  const cardTexts = cardAttributes.map((attribute) => {
    return (
      <p className="card-text">
        <strong>{attribute.label}</strong> : {attribute.value}
      </p>
    );
  }); 
  const addOrDeleteFavorite = (card) => {
    if (favoriteInList != undefined){
      actions.deleteFavorite(card.name);
      setButtonClassname(outlineClassName)
    } else if (favoriteInList === undefined){
        actions.addFavorite(card);
        setButtonClassname(plainClassName)  
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
        <button onClick={() => {addOrDeleteFavorite(card)}}className={buttonClassName}>
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
};
