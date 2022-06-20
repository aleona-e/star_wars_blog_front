import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FavoritesMenu } from "./FavoritesMenu.js";
import { Context } from "../store/appContext.js";


export const Navbar = () => {

  const {store} = useContext(Context)
  console.log(store.favorites.length)
  return (
    <nav className="navbar navbar-light bg-light p-5">
      <Link to="/">
        <span className="navbar-brand ps-5 pt-3">
          <img
            src="https://variety.com/wp-content/uploads/2015/05/star-wars-logo.jpg"
            alt=""
            width="80"
            height="50"
            className="d-inline-block align-text-top"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            {"Favorites " + store.favorites.length} 
          </a>
          <FavoritesMenu />
        </div>
      </div>
    </nav>
  );
};
