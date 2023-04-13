import React, { useState, useEffect } from "react";
import './CoverRecipe.scss';
import NewCard from "../../components/NewCard/NewCard";
import Carousel from 'react-bootstrap/Carousel';
// import { getRecipes } from "../../services/ApiService";
import Axios from 'axios';

export const CoverRecipe = () => {
    const [index, setIndex] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    useEffect(() => {
        // more recipes per the slider, at the end of the link, increase the "number"
        Axios.get('https://api.spoonacular.com/recipes/random?apiKey=a5d3501482ba4254a0c113e6c551b9e1&number=12')
          .then(response => setRecipes(response.data.recipes))
          .catch(err => console.log(err))
      }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getCardsPerSlide = () => {
        return windowWidth >= 768 ? 3 : 2;
    };

    const carouselItems = [];
    const numOfCards = getCardsPerSlide();
    const numOfSlides = Math.ceil(recipes.length / numOfCards);

    for (let i = 0; i < numOfSlides; i++) {
        const startIndex = i * numOfCards;
        const endIndex = startIndex + numOfCards;
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
            <h1 className="Featured-title type-animation animating">Featured Recipes!</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                    {carouselItems}
            </Carousel>
        </div>
    );
};