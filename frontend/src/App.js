import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header1 from "./components/Header1/Header1";
import Home from "./pages/Home/Home";
import { ShoppingList} from "./pages/ShoppingList/ShoppingList";
import SignUp from "./pages/Authentication/Signup";
import Login from "./pages/Authentication/Login";
import { RecipeDetails } from "./pages/RecipeDetails/RecipeDetails";

import CoverPage from "./pages/CoverPage/CoverPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import { IngredientsSelectedContext } from "./IngredientsSelectedContext";


function App() {

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  return (
    <>
    <IngredientsSelectedContext.Provider value={{selectedIngredients, setSelectedIngredients}}>
    <Router>
      <div className="App">
      <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/shopping" element={<ShoppingList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="cover" element={<CoverPage />} />  
          <Route path="landing" element={<LandingPage />} />
          
        </Routes>
      </div>
    </Router>
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