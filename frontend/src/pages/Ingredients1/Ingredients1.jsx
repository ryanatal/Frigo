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
                
                    <div class="ingredientCard">
                            <div>
                                {/* <div class="ingredientButton">Show More</div> */}
                                </div>

                                <div class="ingredientContent">
                                <h2 class="ingredientTitle">{aisle[j]}</h2>
                                <ul class="ingredientList">
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
                <li key={i}>
                    <input type="checkbox" class="checkbox" id={ingredients[i]} name={ingredients[i]} value={ingredients[i]}></input>
                    <label for={ingredients[i]}>{ingredients[i]}</label>
                </li>
            )
        }
        return ingredientList;
    };

    return (
        <>
            <div id="searchContainer">
                    <input id="searchInput" type="text" placeholder="Search for ingredients" />
                    <input type = "button" id = "getIngredients" value = "View Ingredients"/>
            </div>
                &nbsp;
                &nbsp;
                <div id="sliderIngredient">
                    <div id="ingredientContainer">
                        {getList(ingredientData)}
                    </div>
                </div>
        </>
    );
};

export default Ingredients1;