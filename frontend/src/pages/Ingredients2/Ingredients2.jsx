import { getID } from "../../services/ApiService";
import { useState, useEffect } from "react";

import axios from "axios";
import "../Ingredients1/Ingredients1.scss";

export const Ingredients2 = () => {
    const [idData, setIdData] = useState([]);

    useEffect(() => {
        async function fetchIdData() {
            const data = await getID();
            setIdData(data);
        }
        fetchIdData();
    }, []);


    // axios function for the api call

    // gets lists of aisles
    const getAisle = (idData) => {
        let aisle = [];
        idData.array.forEach(id => {
            axios.get("https://api.spoonacular.com/food/ingredients/"+{id}+"/information").then((response) => {
                if (response.data.aisle != null && !aisle.includes(response.data.aisle)) {
                    aisle.push(response.data.aisle);
                }
            });
        });
        return aisle;
    };


    // gets lists of ingredients based on aisle
    const getIngredients = (idData) => {
        let ingredients = [];
        let aisles = getAisle(idData);
        aisles.forEach((aisle) => {
            let ingredientList = [];
            idData.array.forEach(id => {   
                axios.get("https://api.spoonacular.com/food/ingredients/"+{id}+"/information").then((response) => {
                    if (response.data.aisle === aisle) {
                        ingredientList.push(response.data.name);
                    }
                });
            });
            ingredients.push(ingredientList);
        });
        const list = [ aisles, ingredients ];
        return list;
    };


    // maps the aisles to the page
    const getList = (idData) => {
        let ingredientData = getIngredients(idData);
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

    // maps the ingredients to the page
    const getIngredientList = (ingredients) => {
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
                        {getList(idData)}
                    </div>
                </div>

        </>
    );
};

export default Ingredients2;