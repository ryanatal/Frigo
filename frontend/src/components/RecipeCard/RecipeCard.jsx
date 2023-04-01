import React from 'react';
import './RecipeCard.scss';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    getRecipeInfo
} from "../../services/ApiService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const RecipeCard = ({ id }) => { // receive id as a prop
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getRecipeInfo(id).then((recipe) => setRecipe(recipe));
    }, [id]);

    return (
        <Card id="card">
            <Card.Img variant="top" src={recipe.image} className="cardImage"/>
            <Card.Body className='CardBody'>
                <Card.Title className="food1">{recipe.title}</Card.Title>
                <Card.Text className="info1">
                    ETA: {recipe.readyInMinutes} &nbsp; &nbsp; Likes: {recipe.aggregateLikes}
                </Card.Text>
                <Link to={`/recipes/${id}`}>
                    <Button className="CookButton">Let's Cook!</Button>
                </Link>        
            </Card.Body>
        </Card> 
    );
};

export default RecipeCard;