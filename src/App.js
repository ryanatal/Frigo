import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header1 from "./components/Header1/Header1";
import Home from "./pages/Home/Home";
import { ShoppingList} from "./pages/ShoppingList/ShoppingList";
import SignUp from "./pages/Authentication/Signup";
import Login from "./pages/Authentication/Login";
import { RecipeDetails } from "./pages/RecipeDetails/RecipeDetails";
import Profile from "./pages/Profile/Profile";
import CoverPage from "./pages/CoverPage/CoverPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import { IngredientsSelectedContext } from "./IngredientsSelectedContext";
import { PantryIngredientsSelectedContext } from "./PantryIngredientsSelectedContext";


function App() {

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedPantryIngredients, setSelectedPantryIngredients] = useState([]);

  return (
    <>
    <IngredientsSelectedContext.Provider value={{selectedIngredients, setSelectedIngredients}}>
    <PantryIngredientsSelectedContext.Provider value={{selectedPantryIngredients, setSelectedPantryIngredients}}>
    <Router>
      <div className="App">
      <Header1 />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/shopping" element={<ShoppingList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="cover" element={<CoverPage />} />  
          <Route path="landing" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    </PantryIngredientsSelectedContext.Provider>
    </IngredientsSelectedContext.Provider>
    </>
  );
}

export default App;

// import { Link } from "react-router-dom";
// import { getIngredients } from "../../services/ApiService";
// import { useState, useEffect } from "react";

  // const [ingredients, setIngredients] = useState([]);
  // const [recipe, setRecipe] = useState({});

  // useEffect(() => {
  //   getIngredients().then((ingredients) => {
  //     setIngredients(ingredients);
  //   });
  //   console.log(ingredients);
  // }, []);