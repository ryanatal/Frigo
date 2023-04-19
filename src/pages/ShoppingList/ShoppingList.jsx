import React, { useContext, useState, useEffect } from "react";
import "./ShoppingList.scss";
import { ClickableDiv } from "../../components/ClickableDiv/ClickableDiv";
import { IngredientsSelectedContext } from "../../IngredientsSelectedContext";
import { getIngredients } from "../../services/ApiService";

export const ShoppingList = () => {
  const { selectedIngredients, setSelectedIngredients } = useContext(
    IngredientsSelectedContext
  );

  const removeItem = (index) => {
    const newSelectedIngredients = [...selectedIngredients];
    newSelectedIngredients.splice(index, 1);
    setSelectedIngredients(newSelectedIngredients);
  };

  const [ingredients, setIngredients] = useState(null);
  const [ingredientSearchQuery, setIngredientSearchQuery] = useState("");
  const [shoppingListSearchQuery, setShoppingListSearchQuery] = useState("");

  useEffect(() => {
    getIngredients().then((ingredients) => {
      setIngredients(ingredients);
    });
  }, []);

  if (!ingredients) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shopping-list card-deck">
      <div className="card text-white bg-dark shopping-ingredients">
        <div className="card-title">
          <h2>Ingredients</h2>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={ingredientSearchQuery}
              onChange={(e) => setIngredientSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="card-body ingredients-body">
          <ClickableDiv
            items={ingredients.filter((ingredient) =>
              ingredient.ingredient
                .toLowerCase()
                .includes(ingredientSearchQuery.toLowerCase())
            )}
            selectedItems={selectedIngredients}
            setSelectedItems={setSelectedIngredients}
          />
        </div>
      </div>
      <div className="card text-white bg-dark shopping-list-items">
        <div className="card-title">
          <h2>Shopping List</h2>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={shoppingListSearchQuery}
              onChange={(e) => setShoppingListSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="card-body list-body">
          <div className="items-selected">
            {selectedIngredients.filter((item) => item.ingredient.toLowerCase().includes(shoppingListSearchQuery.toLowerCase())).map((item, index) => (
              <div key={index} className="shopping-item">
                {item.ingredient}
                <div className="shopping-btns-wrapper">
                  <button
                    onClick={(index) => removeItem(index)}
                    className="btn btn-primary"
                  >
                    Got it
                  </button>
                  <button
                    onClick={(index) => removeItem(index)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
