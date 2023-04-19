import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    console.log(instructions)
  }, [id]);

  if (!recipe) return null;

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
              <h2>Ingredients</h2>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="recipe-details-ingredient">
                  {ingredient}
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
