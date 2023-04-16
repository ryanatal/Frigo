import React, { useContext } from "react";
import "./ShoppingList.scss";
import { ClickableDiv } from "../../components/ClickableDiv/ClickableDiv";
import { IngredientsSelectedContext } from "../../IngredientsSelectedContext";

export const ShoppingList = () => {
  const { selectedIngredients, setSelectedIngredients } = useContext(
    IngredientsSelectedContext
  );

  const removeItem = (index) => {
    const newSelectedIngredients = [...selectedIngredients];
    newSelectedIngredients.splice(index, 1);
    setSelectedIngredients(newSelectedIngredients);
  };

  return (
    <div className="shopping-list card-deck">
      <div className="card text-white bg-dark shopping-ingredients">
        <div className="card-title">
          <h2>Ingredients</h2>
          <div className="search-container">
            <input className="search-input" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="card-body ingredients-body">
          <ClickableDiv
            items={[
              "Item1",
              "Item2",
              "Item3",
              "Item4",
              "Item5",
              "Item6",
              "Item7",
              "Item8",
              "Item9",
              "Item10",
              "Item11",
              "Item12",
              "Item13",
              "Item14",
              "Item15",
              "Item16",
              "Item17",
              "Item18",
              "Item19",
              "Item20",
              "Item21",
              "Item22",
              "Item23",
              "Item24",
              "Item25",
              "Item26",
              "Item27",
              "Item28",
              "Item29",
              "Item30",
            ]}
            selectedItems={selectedIngredients}
            setSelectedItems={setSelectedIngredients}
          />
        </div>
      </div>
      <div className="card text-white bg-dark shopping-list-items">
        <div className="card-title">
          <h2>Shopping List</h2>
          <div className="search-container">
            <input className="search-input" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="card-body list-body">
          <div className="items-selected">
            {selectedIngredients.map((item, index) => (
              <div key={index} className="shopping-item">
                {item}
                <div className="shopping-btns-wrapper">
                  <button onClick={(index) => removeItem(index)} className="btn btn-primary">Got it</button>
                  <button onClick={(index) => removeItem(index)} className="btn btn-danger">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
