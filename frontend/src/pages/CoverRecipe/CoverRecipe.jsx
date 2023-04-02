import React, { useState, useEffect } from "react";
import './CoverRecipe.scss';
// import RecipeCard from "../../components/RecipeCard/RecipeCard";
import NewCard from "../../components/NewCard/NewCard";
import Carousel from 'react-bootstrap/Carousel';
import Icon from '../../assets/PrevNextIcon.png';
import { getRecipes } from "../../services/ApiService";

export const CoverRecipe = () => {
    const [index, setIndex] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    useEffect(() => {
        getRecipes().then((data) => {
        setRecipes(data);
        });
    }, []);

    const carouselItems = [];
    for (let i = 0; i < 3; i++) {
        const startIndex = i * 3;
        const endIndex = startIndex + 3;
        const recipesToShow = recipes.slice(startIndex, endIndex);
        const carouselItem = (
            <Carousel.Item key={i}>
            <div className="carousel-inner-items">
                {recipesToShow.map((recipe) => (
                    <NewCard className="Card-In-Carousel"
                        key={recipe.id}
                        id={recipe.id}
                        image={recipe.image}
                        title={recipe.title}
                        readyInMinutes={recipe.readyInMinutes}
                        aggregateLikes={recipe.aggregateLikes}
                    />
                ))}
            </div>
            </Carousel.Item>
        );
        carouselItems.push(carouselItem);
    }


    return (
        <div className="CoverRecipe">
            {/* <style>
                {`
                    .carousel-control-prev-icon{
                        background-image: url(${Icon});
                    }
                    .carousel-control-next-icon{
                        transform: scaleX(-1);
                        background-image: url(${Icon});
                    }
                `}
            </style> */}
            <h1 className="Featured-title type-animation animating">Featured Recipes!</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                    {carouselItems}
            </Carousel>
            
        </div>
    );
};