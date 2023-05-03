import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
import Pantry from "./pages/Pantry/Pantry";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Bot from "./components/Bot/Bot";
import BotButton from "./components/BotButton/BotButton";
import { DietSelectedContext } from "./DietSelectedContext";

function App() {

  // const [selectedIngredients, setSelectedIngredients] = useState([]);
  // const [selectedPantryIngredients, setSelectedPantryIngredients] = useState([]);
  const [selectedDiet, setSelectedDiets] = useState([]);

  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <>
    {/* <IngredientsSelectedContext.Provider value={{selectedIngredients, setSelectedIngredients}}>
    <PantryIngredientsSelectedContext.Provider value={{selectedPantryIngredients, setSelectedPantryIngredients}}> */}
    <DietSelectedContext.Provider value={{selectedDiet, setSelectedDiets}}>
    <Router>
      <div className="App">
      <Header1 />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/aboutus" element={isAuth ? <AboutUs /> : <Navigate to="/" /> } />
          <Route path="/shopping" element={isAuth ? <ShoppingList /> : <Navigate to="/" /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" /> } />
          <Route path="/recipes/:id" element={isAuth ? <RecipeDetails /> : <Navigate to="/" /> } />
          <Route path="cover" element={isAuth ? <CoverPage /> : <Navigate to="/" /> } />  
          <Route path="landing" element={isAuth ? <LandingPage /> : <Navigate to="/" /> } />
          <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" /> } />
          <Route path="/ingredients" element={isAuth ? <Pantry /> : <Navigate to="/" /> } />
          
        </Routes>
        <BotButton />
      </div>
      <ToastContainer />
    </Router>
    </DietSelectedContext.Provider>
    {/* </PantryIngredientsSelectedContext.Provider>
    </IngredientsSelectedContext.Provider> */}
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