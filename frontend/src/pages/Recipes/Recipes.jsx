import React, { useState, useEffect } from "react";
// import { getRecipes } from "../../services/ApiService";
import Axios from 'axios';

import "./Recipes.scss";
import "../CoverRecipe/CoverRecipe.scss";
//import RecipeCard from "../../components/RecipeCard/RecipeCard";
import NewCard from "../../components/NewCard/NewCard";

export const Recipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // if you want more recipes per the slider at the end of the link increase the "number"
    Axios.get('https://api.spoonacular.com/recipes/random?apiKey=a5d3501482ba4254a0c113e6c551b9e1&number=5')
      .then(response => setRecipes(response.data.recipes))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div id="main">
      <div id="searchContainerRecipe">
        <input id="searchInputRecipe" type="text" placeholder="Search for recipes" />
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
