import React from 'react';
import './CoverRecipe.scss';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
    getRecipeInfo
} from "../../services/ApiService";


export const CoverRecipe = () => {
    const [recipe, setRecipe] = useState({});
    //gets id from url
    const  id  = 1;

    useEffect(() => {
        getRecipeInfo(id).then((recipe) => setRecipe(recipe));
      }, [id]);


    return (
        <>
        <div className="CoverRecipe">
            <div className="Intro">
                <h1>What's for dinner?</h1>
            </div>
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
                    <a href="#" className="btn">Let's Cook!</a>
            </div>
        </div>
        </>
    );
};