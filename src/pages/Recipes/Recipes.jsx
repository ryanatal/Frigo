import React, { useState, useEffect, useContext } from "react";
import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
import NewCard from "../../components/NewCard/NewCard";
import { getRandomRecipes, getRecipesByIngredients, searchRecipes } from "../../services/ApiService";
import { PantryIngredientsSelectedContext } from "../../PantryIngredientsSelectedContext";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { selectedPantryIngredients } = useContext(PantryIngredientsSelectedContext);

  useEffect(() => {
    if (searchInput && selectedPantryIngredients.length > 0) {
      // search for recipes by name and ingredients
      Promise.all([
        getRecipesByIngredients(selectedPantryIngredients.map(ingredientObj => ingredientObj.ingredient).join(",")),
        searchRecipes(searchInput),
      ]).then(([ingredientsResults, searchResults]) => {
        const combinedResults = [...ingredientsResults, ...searchResults];
        const filteredResults = combinedResults.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setRecipes(filteredResults);
      });
    } else if (searchInput) {
      // search for recipes by name
      searchRecipes(searchInput).then((response) => {
        setRecipes(response);
      });
    } else if (selectedPantryIngredients.length > 0) {
      // search for recipes by ingredients
      getRecipesByIngredients(selectedPantryIngredients.map(ingredientObj => ingredientObj.ingredient).join(",")).then(
        (response) => {
          setRecipes(response);
        }
      );
    }else {
      // get random recipes
      getRandomRecipes(5).then((response) => {
        setRecipes(response);
      })
    }
  }, [searchInput, selectedPantryIngredients]);

  return (
    <div id="main">
      <div id="searchContainerRecipe">
        <input
          id="searchInputRecipe"
          type="text"
          placeholder="Search for recipes"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
