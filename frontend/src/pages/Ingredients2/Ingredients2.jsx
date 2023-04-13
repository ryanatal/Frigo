import { getIngredientsList } from "../../services/ApiService";
import { useState, useEffect } from "react";

import "./Ingredients2.scss";

export const Ingredients2 = () => {
    const [ingredientData, setIngredientData] = useState([]);

    useEffect(() => {
        async function fetchIngredientData() {
            const data = await getIngredientsList();
            setIngredientData(data);
        }
        fetchIngredientData();
        }, []);


    return (
        <>
            <div id="searchContainerIngredients">
                <input id="searchInputIngredients" type="text" placeholder="Search for ingredients" />
                <input type = "button" id = "getIngredients" value = "View Ingredients"/>
            </div>
            <div id="sliderIngredient">
                <div className="card-deck">
                    <div className="ingredientCard card">
                        <div class="ingredientContent card-body">
                            <h4 class="card-title ingredientTitle">Ingredients</h4>
                            <div class="card-text ingredientList">
                                {ingredientData.map((ingredient) => (
                                    <div className="ingredient-details">
                                        <input type="checkbox" class="ingredientCheckbox" id={ingredient.id} name={ingredient.ingredient} value={ingredient.ingredient}></input>
                                        &nbsp;
                                        &nbsp;
                                        <label for={ingredient.ingredient}>{ingredient.ingredient}</label>
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