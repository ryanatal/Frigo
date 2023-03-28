
import React from 'react';
import './RecipeCard.scss';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    getRecipeInfo
} from "../../services/ApiService";


export const RecipeCard = ({ id }) => { // receive id as a prop
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getRecipeInfo(id).then((recipe) => setRecipe(recipe));
    }, [id]);

    return (
        <>
        <div className="CoverRecipe">
            <div className="card">
                <div className="header">
                    <img src={recipe.image} alt={recipe.title} className="cardImage"></img>
                </div>
                <div className="text">
                    <h1 className="food">
                        {recipe.title}
                    </h1>
                    <p className="info">ETA: {recipe.readyInMinutes} &nbsp; &nbsp; Likes: {recipe.aggregateLikes}</p>
                </div>
                    <Link to={`/recipes/${id}`} className="Cook">Let's Cook!</Link>
            </div>
        </div>
        </>
    );
};

export default RecipeCard;