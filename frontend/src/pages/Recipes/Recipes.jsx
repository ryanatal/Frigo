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
    <div id="main">
       <div id="searchContainer">
          <input id="searchInput" type="text" placeholder="Search for recipes" />
        </div>

      <div id="slider">
            <RecipeCard id="1"/>
            <RecipeCard id="1"/>
            <RecipeCard id="1"/>
            <RecipeCard id="1"/>
            <RecipeCard id="1"/>
      </div>
    </div>
  );
};

export default Recipes;