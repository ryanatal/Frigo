import React, { useState, useEffect } from "react";
import { getRecipeInfo } from "../../services/ApiService";
import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export const Recipes = ({ id }) => {
  const [recipecount, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchRecipeData() {
      const data = await getRecipeInfo(id);
      setRecipe(data);
    }
    fetchRecipeData();
  }, [id]);

  const getRecipe = (recipecount) => {
    let recipeList = [];
    if (recipecount) {
      recipeList = recipecount.map((recipe) => (
        <RecipeCard id={recipe.id} />
      ));
    }
    return recipeList;
  };
  

  return (
    <div id="main">
      <div id="searchContainer">
        <input id="searchInput" type="text" placeholder="Search for recipes" />
      </div>

      <div id="slider">
        <div className="sliderContent">{getRecipe()}</div>
      </div>
    </div>
  );
};

export default Recipes;
