import React, { useState, useEffect } from 'react';
import './NewCard.scss';
import { getRecipeInfo } from '../../services/ApiService';

import 'bootstrap/dist/css/bootstrap.min.css';

export const NewCard = ({ id }) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipeInfo(id).then(recipe => setRecipe(recipe));
  }, [id]);

  return (
    <div className="container">
      <div className="row gy-3 my-3">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <img src={recipe.image} className="card-img-top" alt="recipe" />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">
                ETA: {recipe.readyInMinutes} &nbsp; &nbsp; Likes: {recipe.aggregateLikes}
              </p>
              <a href={`/recipes/${id}`} className="btn btn-primary">
                Let's Cook!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
