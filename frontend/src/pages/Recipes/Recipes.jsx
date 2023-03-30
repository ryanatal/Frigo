import React, { useState, useEffect } from "react";
import { getRecipes } from "../../services/ApiService";
import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export const Recipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <div id="main">
      <div id="searchContainer">
        <input id="searchInput" type="text" placeholder="Search for recipes" />
      </div>

      <div id="slider">
        <div className="sliderContent">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
