import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
// import Header1 from "./components/Header1/Header1";
import Home from "./pages/Home/Home";
import Shopping from "./pages/ShoppingList/Shopping";
import Authentication from "./pages/Authentication/Authentication";
// import SignUp from "./pages/Authentication/Signup";
// import Login from "./pages/Authentication/Login";
//import Ingredients from "./pages/Ingredients/Ingredients";
import { RecipeDetails } from "./pages/RecipeDetails/RecipeDetails";

import CoverPage from "./pages/CoverPage/CoverPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/shopping" element={<Shopping />} />
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/authentication" element={<Authentication />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
          <Route path="cover" element={<CoverPage />} />  
          <Route path="landing" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
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