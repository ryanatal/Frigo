import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { sendIngredientsToShoppingList } from "../../state";

import {
  getRecipeInfo,
  getRecipeIngredients,
  getRecipeMeasurements,
  getRecipeInstructions,
} from "../../services/ApiService";
import "./RecipeDetails.scss";

export const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList);

  const { id } = useParams();

  useEffect(() => {
    getRecipeInfo(id).then((recipe) => setRecipe(recipe));
    getRecipeIngredients(id).then((ingredients) => setIngredients(ingredients));
    getRecipeMeasurements(id).then((measurements) =>
      setMeasurements(measurements)
    );
    getRecipeInstructions(id).then((data) =>
      setInstructions(data)
    );
    console.log(ingredients);
    console.log(shoppingList);
  }, [id]);

  if (!recipe || !ingredients || !measurements || !instructions) {
    return <Loader />;
  }

  return (
    <>
      <div className="recipe-details-wrapper">
        <div className="recipe-details-title">
          <h1>{recipe.title}</h1>
        </div>
        <div id="recipe-details-container">
          <div className="recipe-details-left">
            <div className="recipe-details-img">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="recipe-details-ingredients">
              <div className="recipe-details-ingredients-title-wrapper">
                <h2>Ingredients</h2>
                <button
                  className="btn btn-primary recipe-details-ingredients-btn"
                  onClick={() => {
                    console.log(ingredients);
                    dispatch(sendIngredientsToShoppingList(ingredients));
                    alert("Ingredients added to shopping list");
                    console.log(shoppingList);
                  }}
                >
                  Add to shopping list
                </button>
              </div>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="recipe-details-ingredient">
                  {ingredient.ingredient}
                </div>
              ))}
            </div>
          </div>
          <div className="recipe-details-right">
          <div className="recipe-details-measurements">
              <h2>Measurements</h2>
              <ul className="recipe-details-measurement">
                {measurements.map((measurement, index) => (
                  <li key={index}>{measurement}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-details-steps">
              <h2>Steps</h2>
              {instructions.map((instruction, index) => (
                <div key={index} className="recipe-details-step">
                  <span className="recipe-details-number">
                    {instruction.number}.
                  </span>{" "}
                  <div>{instruction.step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
