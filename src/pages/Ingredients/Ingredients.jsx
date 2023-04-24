import { getIngredients } from "../../services/ApiService";
import { useState, useEffect } from "react";
import { ClickableDiv } from "../../components/ClickableDiv/ClickableDiv";
import { useSelector, useDispatch } from "react-redux";
import { setPantry } from "../../state";
import axios from "axios";
import "./Ingredients.scss";

export const Ingredients2 = () => {
  const [ingredientData, setIngredientData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const pantry = useSelector((state) => state.pantry);
  const [selectedPantryIngredients, setSelectedPantryIngredients] = useState(pantry);

  useEffect(() => {
    getIngredients().then((ingredientData) => {
      setIngredientData(ingredientData);
    });
  }, []);

  useEffect(() => {
    console.log("initial pantry: " + pantry);
    setSelectedPantryIngredients(pantry);
    console.log(selectedPantryIngredients);
  }, []);

  const savePantry = () => {
    axios
      .post(
        "http://localhost:8000/api/v1/pantry/add",
        {
          ingredients: selectedPantryIngredients,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("saved: " + res.data.ingredients);
        dispatch(setPantry(selectedPantryIngredients));
      });
  };

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
              <button onClick={savePantry}>Save</button>
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
