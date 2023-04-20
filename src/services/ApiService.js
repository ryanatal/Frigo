import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";

const REACT_APP_SPOONACULAR_API_KEY = 
  [
    "a5d3501482ba4254a0c113e6c551b9e1",
    "528b5885a5424734ac96e5c033ca8b45",
    "cfe2f9b416d04a718497f7ea43c738e6"
  ];

let currentKeyIndex = 0;

const getNextApiKey = () => {
  currentKeyIndex = (currentKeyIndex + 1) % REACT_APP_SPOONACULAR_API_KEY.length;
  return REACT_APP_SPOONACULAR_API_KEY[currentKeyIndex];
};

//#region random recipes
export const getRandomRecipes = async (number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/recipes/random?number=${number}&apiKey=${REACT_APP_SPOONACULAR_API_KEY[currentKeyIndex]}`
    );
    return response.data.recipes;
  } catch (error) {
    if (error.response.status === 402) {
      getNextApiKey();
      return getRandomRecipes(number);
    }
    console.log(error);
  }
};
//#endregion recipes

//#region Recipe Details;

export const getRecipeInfo = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API_KEY[currentKeyIndex]}`
    );
    return response.data;
  } catch (error) {
    if (error.response.status === 402) {
      getNextApiKey();
      return getRecipeInfo(id);
    }
    console.log(error);
  }
};

export const getRecipeMeasurements = async (id) => {
  const ingredients = [];
  try {
    const response = await axios.get(
      `${BASE_URL}/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API_KEY[currentKeyIndex]}`
    );
    response.data.extendedIngredients.forEach((ingredient) => {
      ingredients.push(ingredient.original);
    });
    return ingredients;
  } catch (error) {
    if (error.response.status === 402) {
      getNextApiKey();
      return getRecipeMeasurements(id);
    }
    console.log(error);
  }
};

export const getRecipeIngredients = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API_KEY[currentKeyIndex]}`
    );
    const ingredients = response.data.extendedIngredients.map((ingredient) => ingredient.name);
    return ingredients;
  } catch (error) {
    if (error.response.status === 402) {
      getNextApiKey();
      return getRecipeIngredients(id);
    }
    console.log(error);
  }
};

export const getRecipeInstructions = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/recipes/${id}/information?apiKey=${REACT_APP_SPOONACULAR_API_KEY[currentKeyIndex]}`
    );
    return response.data.analyzedInstructions[0].steps;
  } catch (error) {
    if (error.response.status === 402) {
      getNextApiKey();
      return getRecipeInstructions(id);
    }
    console.log(error);
  }
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