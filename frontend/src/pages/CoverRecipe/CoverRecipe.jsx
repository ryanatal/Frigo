import React from 'react';
import './CoverRecipe.scss';
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export const CoverRecipe = () => {
    return (
        <>
        <div className="Intro">
            <h1>What's for dinner?</h1>
        </div>
        <RecipeCard id="1" />
        </>
    );
};