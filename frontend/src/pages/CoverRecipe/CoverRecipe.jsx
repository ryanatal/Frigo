import { React, useState } from 'react';
import './CoverRecipe.scss';
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Carousel from 'react-bootstrap/Carousel';
import  Icon from '../../assets/PrevNextIcon.png'; 
export const CoverRecipe = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="CoverRecipe">
            <style>
                {`
                    .carousel-control-prev-icon{
                        background-image: url(${Icon});
                    }
                    .carousel-control-next-icon{
                        transform: scaleX(-1);
                        background-image: url(${Icon});
                    }
                `}
            </style>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="carousel-inner">
                        <RecipeCard id={1}/>
                        <RecipeCard id={1}/>
                        <RecipeCard id={1}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-inner">
                        <RecipeCard id={1} />
                        <RecipeCard id={1} />
                        <RecipeCard id={1} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-inner">
                        <RecipeCard id={1} />
                        <RecipeCard id={1} />
                        <RecipeCard id={1} />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
