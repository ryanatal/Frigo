import React from 'react';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getRecipeInfo} from "../../services/ApiService";

export const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const  id  = 1;

  useEffect(() => {
      getRecipeInfo(id).then((recipe) => setRecipe(recipe));
    }, [id]);

  return (
    <div>
      <div id="searchbar">
        <input id="search_input" type="text" placeholder="Search for recipes" />
        <input type="button" id="shopping_list" value="Shopping List" />
      </div>

      <div id="slider">
        <div id="container">
          <div className="card">
          <div className="header">
              <img src={recipe.image} alt={recipe.title} className="cardImage"></img>
          </div>
          <div className="text">
              <h1 className="food">
                  {recipe.title}
              </h1>
          </div>
              <Link to={`/recipe/${id}`} className="btn">view more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
