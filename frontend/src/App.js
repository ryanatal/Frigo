import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shopping from "./pages/ShoppingList/Shopping";
import Authentication from "./pages/Authentication/Authentication";
// import SignUp from "./pages/Authentication/Signup";
// import Login from "./pages/Authentication/Login";
import AboutUs from "./pages/AboutUs/AboutUs";
//import Ingredients from "./pages/Ingredients/Ingredients";
import { RecipeDetails } from "./pages/RecipeDetails/RecipeDetails";
import CoverPage from "./pages/CoverPage/CoverPage";
import Header1 from "./components/Header1/Header1";

function App() {
  return (
    <Router>
      <div className="App">
      <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/shopping" element={<Shopping />} />
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/authentication" element={<Authentication />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
          <Route path="cover" element={<CoverPage />} />  
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