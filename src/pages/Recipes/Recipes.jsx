import React, { useState, useEffect } from "react";
import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
import NewCard from "../../components/NewCard/NewCard";
import { getRandomRecipes, searchRecipes } from "../../services/ApiService";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      searchRecipes(searchQuery, 5).then((response) => {
        setRecipes(response);
      });
    } else {
      getRandomRecipes(5).then((response) => {
        setRecipes(response);
      });
    }
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div id="main">
      <div id="searchContainerRecipe">
        <input
          id="searchInputRecipe"
          type="text"
          placeholder="Search for recipes"
          onChange={handleSearchChange}
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
