import { getIngredients, getDiets } from "../../services/ApiService";
import { useState, useEffect } from "react";
import { ClickableDiv } from "../../components/ClickableDiv/ClickableDiv";
import { ClickableDiv2 } from "../../components/ClickableDiv/ClickableDiv2";
import { useSelector, useDispatch } from "react-redux";
import { setPantry } from "../../state";
import axios from "axios";
import "./Ingredients.scss";
import { SERVER_URL } from "../../constants/constants";


export const Ingredients2 = () => {
  const [ingredientData, setIngredientData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [diets, setDiets] = useState([]);
  const [selectedDiets, setSelectedDiets] = useState([]);

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
    getDiets().then((diets) => {
      setDiets(diets);
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
        `${SERVER_URL}/api/v1/pantry/add`,
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

  useEffect(() => {
    savePantry();
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
              {/* <button onClick={savePantry}>Save</button> */}
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
          <div className="dietCard card">
            <div className="ingredientContent card-body">
              <h4 className="card-title ingredientTitle">Diets:</h4>
              <ClickableDiv2
                items={diets}
                selectedItems={selectedDiets}
                setSelectedItems={setSelectedDiets}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients2;
