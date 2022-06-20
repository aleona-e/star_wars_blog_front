
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Favorite = (props) => {
  const {actions} = useContext(Context)
return (
    <li><Link to={"/" + props.cardType + "/" + props.cardTitle} className="dropdown-item" href="#">{props.cardTitle}</Link><button className="btn" onClick={()=>{actions.deleteFavorite(props.cardTitle)}}><i className="fa fa-trash ms-2"/></button></li>   
   )
}