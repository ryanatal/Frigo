import { getIngredientsList } from "../../services/ApiService";
import { useState, useEffect } from "react";

import "./Ingredients2.scss";

export const Ingredients2 = () => {
    const [ingredientData, setIngredientData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        async function fetchIngredientData() {
            const data = await getIngredientsList();
            setIngredientData(data);
        }
        fetchIngredientData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredIngredientData = ingredientData.filter(
        (ingredient) =>
            ingredient.ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div id="searchContainerIngredients">
                <input
                    id="searchInputIngredients"
                    type="text"
                    placeholder="Search for ingredients"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <input type="button" id="getIngredients" value="View Ingredients" />
            </div>
            <div id="sliderIngredient">
                <div className="card-deck">
                    <div className="ingredientCard card">
                        <div className="ingredientContent card-body">
                            <h4 className="card-title ingredientTitle">Ingredients</h4>
                            <div className="card-text ingredientList">
                                {filteredIngredientData.map((ingredient) => (
                                    <div className="ingredient-details">
                                        <input
                                            type="checkbox"
                                            className="ingredientCheckbox"
                                            id={ingredient.id}
                                            name={ingredient.ingredient}
                                            value={ingredient.ingredient}
                                        />
                                        &nbsp;
                                        &nbsp;
                                        <label htmlFor={ingredient.ingredient}>{ingredient.ingredient}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ingredients2;
