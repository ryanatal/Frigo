import { getIngredients } from "../../services/ApiService";
import { useState, useEffect, useContext } from "react";
import { ClickableDiv } from "../../components/ClickableDiv/ClickableDiv";
import { PantryIngredientsSelectedContext } from "../../PantryIngredientsSelectedContext";

import "./Ingredients.scss";

export const Ingredients2 = () => {
    const { selectedPantryIngredients, setSelectedPantryIngredients } = useContext(
        PantryIngredientsSelectedContext
    );
    const [ingredientData, setIngredientData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getIngredients().then((ingredientData) => {
            setIngredientData(ingredientData);
        });
    }, []);

    useEffect(() => {
        console.log(selectedPantryIngredients);
    }, [selectedPantryIngredients]);
    

    return (
        <>
            <div id="searchContainerIngredients">
                <input
                    id="searchInputIngredients"
                    type="text"
                    placeholder="Search for ingredients"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div id="sliderIngredient">
                <div className="card-deck">
                    <div className="ingredientCard card">
                        <div className="ingredientContent card-body">
                            <h4 className="card-title ingredientTitle">Ingredients</h4>
                            <ClickableDiv
                                items={ingredientData.filter((ingredient) =>
                                    ingredient.ingredient
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase())
                                )}
                                selectedItems={selectedPantryIngredients}
                                setSelectedItems={setSelectedPantryIngredients}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ingredients2;
