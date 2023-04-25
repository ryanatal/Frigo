import "../ShoppingList/ShoppingList.scss";
import { ClickableDiv } from "../../components/ClickableDiv/ClickableDiv";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getIngredients } from "../../services/ApiService";
import { useDispatch } from "react-redux";
import { setPantry } from "../../state";
import axios from "axios";
import { SERVER_URL } from "../../constants/constants";

const Pantry = () => {

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const pantry = useSelector((state) => state.pantry);

  const [ingredients, setIngredients] = useState([]);
  const [ingredientSearchQuery, setIngredientSearchQuery] = useState("");
  const [pantrySearchQuery, setPantrySearchQuery] = useState("");

  const [pantryList, setPantryList] = useState(pantry);

  useEffect(() => {
    getIngredients().then((ingredients) => {
      setIngredients(ingredients);
    });
  }, []);

  useEffect(() => {
    console.log("initial pantry list: " + pantry);
    setPantryList(pantry);
    console.log(pantryList);
  }, []);

  const savePantry = () => {
    axios
      .post(
        `${SERVER_URL}/api/v1/pantry/add`,
        {
          ingredients: pantryList,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("saved: " + res.data.ingredients);
        dispatch(setPantry(pantryList));
      });
  };

  useEffect(() => {
    savePantry();
  }, [pantryList]);

  const removeItem = (selectedItem) => {
    setPantryList(pantryList.filter((item) => item.id !== selectedItem.id));
  };

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
          items={ingredients.filter((item) =>
            item.ingredient
              .toLowerCase()
              .includes(ingredientSearchQuery.toLowerCase())
              )}
          selectedItems={pantryList}
          setSelectedItems={setPantryList}
        />
      </div>
    </div>
    <div className="card text-white bg-dark shopping-list-items">
      <div className="card-title">
        <h2>Pantry</h2>
        {/* <button onClick={savePantry}>Save</button> */}
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={pantrySearchQuery}
            onChange={(e) => setPantrySearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="card-body list-body">
        <div className="items-selected">
          {pantryList.filter((item) => item.ingredient.toLowerCase().includes(pantrySearchQuery.toLowerCase())).map((item, index) => (
            <div key={index} className="shopping-item">
              {item.ingredient}
              <div className="shopping-btns-wrapper">
                <button
                  onClick={() => removeItem(item)}
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
  )
};

export default Pantry;
