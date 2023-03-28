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
  
    return (
        <>
            <div id="searchContainer">
                    <input id="searchInput" type="text" placeholder="Search for ingredient groups" />
                    <input type = "button" id = "getIngredients" value = "View Ingredients"/>
                </div>
                &nbsp;
                &nbsp;
                <div id="slider">
                    <div id="ingredientContainer">
                        {ingredientData.map((aisleIngredients, index) => (
                            <div className="ingredientCard" key={index}>
                                <div>
                                    <div className="ingredientButton">Show More</div>
                                </div>
                            <div className="ingredientContent">
                                {console.log(aisleIngredients)}
                                <h2 className="ingredientTitle">{aisleIngredients}</h2>
                                <ul className="ingredientList">
                                    <li> Ok </li>
                                </ul>
                            </div>
                        </div> 
                    ))}  
                </div>
            </div>
        </>
    );
};


             {/* <div>
                <div id="searchContainer">
                    <input id="searchInput" type="text" placeholder="Search for ingredient groups" />
                    <input type = "button" id = "getIngredients" value = "View Ingredients"/>
                </div>
                &nbsp;
                &nbsp;
            </div> 

            <div className="slider">
                <div className="ingredientContainer">
                    {aisle.map((aisleIngredients, index) => (
                        <div className="ingredientCard" key={index}>
                            <div>
                                <div className="ingredientButton">Show More</div>
                            </div>
                                <div className="ingredientContent">
                                    <h2 className="ingredientTitle">{aisleIngredients[0]}</h2>
                                    <ul className="ingredientList">
                                        {aisleIngredients[1].map((ingredient, index) => (
                                            <li key={index}>
                                                <input type="checkbox" id={aisleIngredients[0]} name={ingredient} value={ingredient}></input>
                                                <label for={ingredient}>{ingredient}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        </div>
                    ))}
                </div>
            </div> */}