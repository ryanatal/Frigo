import React from 'react';
import './NewCard.scss';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export const NewCard = ({ id, image, title, readyInMinutes, aggregateLikes }) => {

  return (
    <div className="container">
      <div className="">{/*row gy-3 my-3*/}
        <div className="">{/*col-sm-6 col-md-4 col-lg-3*/}
          <div className="card">
            <img src={image} className="card-img-top" alt="recipe" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                ETA: {readyInMinutes} &nbsp; &nbsp; Likes: {aggregateLikes}
              </p>
              <Link to={`/recipes/${id}`} className="btn btn-primary">
                Let's Cook!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
