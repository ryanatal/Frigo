import React, { useState, useEffect } from "react";
import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
import NewCard from "../../components/NewCard/NewCard";
import { getRandomRecipes } from "../../services/ApiService";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRandomRecipes(5).then((response) => {
      setRecipes(response);
    });
  }, []);

  return (
    <div id="main">
      <div id="searchContainerRecipe">
        <input
          id="searchInputRecipe"
          type="text"
          placeholder="Search for recipes"
        />
      </div>

      <div id="slider">
        <div className="sliderContent">
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
