import React, { useState, useEffect } from "react";
import "./ShoppingList.scss";
import { ClickableDiv } from "../../components/ClickableDiv/ClickableDiv";
import { getIngredients } from "../../services/ApiService";
import { useDispatch } from "react-redux";
import { setShoppingList, setPantryItem } from "../../state";
import axios from "axios";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../constants/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShoppingList = () => {

  const dispatch = useDispatch();
  //Bearer token 
  const token = useSelector((state) => state.token);
  const shoppinglist = useSelector((state) => state.shoppingList);
  const [itemsList, setItemsList] = useState(shoppinglist);
  const [ingredients, setIngredients] = useState(null);
  const [ingredientSearchQuery, setIngredientSearchQuery] = useState("");
  const [shoppingListSearchQuery, setShoppingListSearchQuery] = useState("");

  useEffect(() => {
    getIngredients().then((ingredients) => {
      setIngredients(ingredients);
    })
  }, []);

  // useEffect(() => {
  //   axios.get(`${SERVER_URL}/api/v1/shoppinglist/get`,{
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((res) => {
  //     setItemsList(res.data);
  //     console.log(res.data.length);
  //   });
  // }, [token]);

  useEffect(() => {
    setItemsList(shoppinglist);
  }, []);

  const saveShoppingList = () => {
    axios
      .post(
        `${SERVER_URL}/api/v1/shoppinglist/add`,
        {
          items: itemsList,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(setShoppingList(itemsList));
      });
  };

  //save the shopping list even if the user doesn't click the save button
  useEffect(() => {
    saveShoppingList();
  }, [itemsList]);

  const removeItem = (selectedItem) => {
    setItemsList(itemsList.filter((item) => item.id !== selectedItem.id));
  };

  const sendToPantry = (item) => {
    axios.post(
      `${SERVER_URL}/api/v1/shoppinglist/addToPantry`,
      {
        item: item,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setPantryItem(item));
        removeItem(item);
      });

  }
  
  return (
    ingredients &&
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
            selectedItems={itemsList}
            setSelectedItems={setItemsList}
          />
        </div>
      </div>
      <div className="card text-white bg-dark shopping-list-items">
        <div className="card-title">
          <h2>Shopping List </h2>
          {/* <button onClick={saveShoppingList}>Save</button> */}
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
            {itemsList.filter((item) => item.ingredient.toLowerCase().includes(shoppingListSearchQuery.toLowerCase())).map((item, index) => (
              <div key={index} className="shopping-item">
                {item.ingredient}
                <div className="shopping-btns-wrapper">
                  <button
                    onClick={() => {
                      try {
                        sendToPantry(item);
                        toast.success("Item sent to pantry", {
                          position: "bottom-right",
                          autoClose: 2500,
                          hideProgressBar: false,
                          closeOnClick: true,
                          theme: "dark"
                        })
                      } catch (err) {
                        toast.error("Item failed to be sent to pantry", {
                          position: "bottom-right",
                          autoClose: 2500,
                          hideProgressBar: false,
                          closeOnClick: true,
                          theme: "dark"
                        })
                      }
                    }}
                    className="btn btn-primary"
                  >
                    Got it
                  </button>
                  <button
                    onClick={() => {
                      removeItem(item)
                      toast.success(`${item.ingredient} removed from list`, {
                        position: "bottom-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        theme: "dark"
                      })
                    }}
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
