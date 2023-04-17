import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";
// Cycle through these keys incase API quota limit is full
// const REACT_APP_SPOONACULAR_API_KEY = "cfe2f9b416d04a718497f7ea43c738e6";
// const REACT_APP_SPOONACULAR_API_KEY = "a5d3501482ba4254a0c113e6c551b9e1";
const REACT_APP_SPOONACULAR_API_KEY = "528b5885a5424734ac96e5c033ca8b45";

//#region recipes
export const getRandomRecipes = async (number) => {
  return axios
    .get(
      `${BASE_URL}/recipes/random?number=${number}&apiKey=${REACT_APP_SPOONACULAR_API_KEY}`
    )
    .then((response) => {
      return response.data.recipes;
    });
};
//#endregion recipes

//#region Recipe Details;

export const getRecipeInfo = async (id) => {
  return axios
    .get(
      `${BASE_URL}/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API_KEY}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRecipeMeasurements = async (id) => {
  const ingredients = [];
  return axios
    .get(
      `${BASE_URL}/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API_KEY}`
    )
    .then((response) => {
      response.data.extendedIngredients.forEach((ingredient) => {
        ingredients.push(ingredient.original);
      });
      return ingredients;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRecipeIngredients = async (id) => {
  const ingredients = [];
  return axios
    .get(
      `${BASE_URL}/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API_KEY}`
    )
    .then((response) => {
      response.data.extendedIngredients.forEach((ingredient) => {
        ingredients.push(ingredient.name);
      });
      return ingredients;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRecipeInstructions = async (id) => {
  return axios
    .get(
      `${BASE_URL}/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API_KEY}`
    )
    .then((response) => {
      return response.data.analyzedInstructions[0].steps;
    })
    .catch((error) => {
      console.log(error);
    });
};

//#endregion Recipe Details

export const getIngredientsList = async () => {
  const module = await import("../data/ingredients.js");
  let list = [];
  module.ingredients.forEach((ingredient) => {
    list.push(ingredient);
  });
  return list;
};

export const getIngredients = async () => {
  const module = await import("../data/ingredients.js");
  return module.ingredients;
}