import { getAisle } from "../../services/ApiService";
import { useState, useEffect } from "react";

import "./Ingredients1.scss";

export const Ingredients1 = () => {
    const [ingredientData, setIngredientData] = useState([]);

    useEffect(() => {
      async function fetchIngredientData() {
        const data = await getAisle();
        setIngredientData(data);
      }
      fetchIngredientData();
    }, []);

    const getList = (ingredientData) => {
        for (let i = 0; i < ingredientData.length; i++) {
            let aisle = ingredientData[0];
            let ingredients = ingredientData[1];
            let ingredientList = [];
            for (let j = 0; j < aisle.length; j++) {
                ingredientList.push(
                
                    <div class="ingredientCard card">
                                <div class="ingredientContent card-body">
                                <h4 class="card-title ingredientTitle" >{aisle[j]}</h4>
                                <ul class="card-text ingredientList">
                                    <form id={aisle[j]}>
                                    {getIngredients(ingredients[j])}
                                    </form>
                                </ul>
                            </div>
                    </div>
                )
            } 
            return ingredientList;
        }
    };

    const getIngredients = (ingredients) => {
        let ingredientList = [];
        for (let i = 0; i < ingredients.length; i++) {
            ingredientList.push(
                <div className="ingredient-details">
                <li key={i} className="ingredientsLI">
                    <input type="checkbox" class="ingredientCheckbox" id={ingredients[i]} name={ingredients[i]} value={ingredients[i]}></input>
                    &nbsp;
                    &nbsp;
                    <label for={ingredients[i]}>{ingredients[i]}</label>
                </li>
                </div>
            )
        }
        return ingredientList;
    };

    return (
        <>
            <div className="main">
            <div id="searchContainer">
                    <input id="searchInput" type="text" placeholder="Search for ingredients" />
                    <input type = "button" id = "getIngredients" value = "View Ingredients"/>
            </div>
                &nbsp;
                &nbsp;
                <div id="sliderIngredient">
                    <div className="card-deck">
                        {getList(ingredientData)}
                    </div>
                </div>
                </div>
        </>
    );
};

export default Ingredients1;