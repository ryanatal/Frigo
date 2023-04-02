import React, { useState, useEffect } from "react";
import { getRecipes } from "../../services/ApiService";
import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
//import RecipeCard from "../../components/RecipeCard/RecipeCard";
import NewCard from "../../components/NewCard/NewCard";

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
        <div className="sliderContent" >
          {recipes.map((recipe) => (
            <div className="recipeCard">
            <NewCard
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              readyInMinutes={recipe.readyInMinutes}
              aggregateLikes={recipe.aggregateLikes}
            />
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default Recipes;
