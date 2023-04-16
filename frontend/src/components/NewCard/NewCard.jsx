import React from 'react';
import './NewCard.scss';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export const NewCard = ({ id, image, title, readyInMinutes, aggregateLikes }) => {

  return (
    <div className="container container-recipe">
          <div className="card card-recipe">
            <img src={image} className="card-img-top card-img-top-recipe" alt="recipe" />
            <div className="card-body body-recipe">
              <h5 className="card-title title-recipe">{title}</h5>
              <p className="card-text text-recipe">
                ETA: {readyInMinutes}min &nbsp; &nbsp; Likes: {aggregateLikes}
              </p>
              <Link to={`/recipes/${id}`} className="btn btn-primary button-recipe">
                Let's Cook!
              </Link>
            </div>
          </div>
    </div>
  );
};

export default NewCard;
