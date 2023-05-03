import React, { useState, useEffect, useContext } from "react";
import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
import NewCard from "../../components/NewCard/NewCard";
import { getRandomRecipes, getRecipesByIngredients, searchRecipes, searchRecipesByDiet } from "../../services/ApiService";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { DietSelectedContext } from "../../DietSelectedContext";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const selectedPantryIngredients = useSelector((state) => state.pantry);

  const { selectedDiet } = useContext(DietSelectedContext);


useEffect(() => {
  console.log("USE EFFECT" + selectedDiet);
  if (searchInput && selectedPantryIngredients.length > 0 && selectedDiet) {
    // search for recipes by name, ingredients, and diet
    Promise.all([
      getRecipesByIngredients(selectedPantryIngredients.map(ingredientObj => ingredientObj.ingredient).join(",")),
      searchRecipes(searchInput),
      searchRecipesByDiet(selectedDiet.map(dietObj => dietObj.diet).join(",")),
    ]).then(([ingredientsResults, searchResults, dietResults]) => {
      const combinedResults = [...ingredientsResults, ...searchResults, ...dietResults];
      const filteredResults = combinedResults.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setRecipes(filteredResults);
    });
  } else if (searchInput && selectedDiet) {
    // search for recipes by name and diet
    Promise.all([
      searchRecipes(searchInput),
      searchRecipesByDiet(selectedDiet.map(dietObj => dietObj.diet).join(",")),
    ]).then(([searchResults, dietResults]) => {
      const combinedResults = [...searchResults, ...dietResults];
      const filteredResults = combinedResults.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setRecipes(filteredResults);
    });
  } else if (selectedPantryIngredients.length > 0 && selectedDiet) {
    // search for recipes by ingredients and diet
    Promise.all([
      getRecipesByIngredients(selectedPantryIngredients.map(ingredientObj => ingredientObj.ingredient).join(",")),
      searchRecipesByDiet(selectedDiet.map(dietObj => dietObj.diet).join(",")),
    ]).then(([ingredientsResults, dietResults]) => {
      const combinedResults = [...ingredientsResults, ...dietResults];
      setRecipes(combinedResults);
    });
  } else if (searchInput && selectedPantryIngredients.length > 0) {
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
    
  } else if (selectedDiet) {
    // search for recipes by diet
    searchRecipesByDiet(selectedDiet.map(dietObj => dietObj.diet).join(","))
    .then((response) => {
      console.log(selectedDiet.map(dietObj => dietObj.diet).join(","));
      setRecipes(response);
    });
  } else if (selectedPantryIngredients.length > 0) {
    // search for recipes by ingredients
    getRecipesByIngredients(selectedPantryIngredients.map(ingredientObj => ingredientObj.ingredient).join(",")).then(
      (response) => {
        setRecipes(response);
        console.log(response);
      }
    );
  }else {
    // get random recipes
    getRandomRecipes(5).then((response) => {
      setRecipes(response);
    })
  }
}, [searchInput, selectedPantryIngredients, selectedDiet]);

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
          {recipes.length === 0 ? (
            <Loader />
          ) : (
            recipes.map((recipe) => (
              <div className="recipeCard">
                <NewCard
                  key={recipe.id}
                  id={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  missingIngredients={recipe.missedIngredientCount}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
