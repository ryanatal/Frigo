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
                                <div class="card-text ingredientList">
                                    {getIngredients(ingredients[j])}
                                </div>
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
                    <input type="checkbox" class="ingredientCheckbox" id={ingredients[i]} name={ingredients[i]} value={ingredients[i]}></input>
                    &nbsp;
                    &nbsp;
                    <label for={ingredients[i]}>{ingredients[i]}</label>
                </div>
            )
        }
        return ingredientList;
    };

    return (
        <>
          
            <div id="searchContainerIngredients">
                    <input id="searchInputIngredients" type="text" placeholder="Search for ingredients" />
                    <input type = "button" id = "getIngredients" value = "View Ingredients"/>
            </div>
                &nbsp;
                &nbsp;
                <div id="sliderIngredient">
                    <div className="card-deck">
                        {getList(ingredientData)}
                    </div>
                </div>

        </>
    );
};

export default Ingredients1;