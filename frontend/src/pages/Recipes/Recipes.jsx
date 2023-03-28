import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipeInfo} from "../../services/ApiService";
import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
export const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  const  id  = 1;

  useEffect(() => {
      getRecipeInfo(id).then((recipe) => setRecipe(recipe));
    }, [id]);

  return (
    <div id="perla">
      <div id="searchbar">
        <input id="search_input" type="text" placeholder="Search for recipes" />
        <input type="button" id="shopping_list" value="Shopping List" />
      </div>

      <div id="sliderPerla">
        <div id="containerPerla">
          <RecipeCard id = "1"/>
          <RecipeCard id = "1"/>
          <RecipeCard id = "1"/>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
