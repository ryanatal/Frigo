import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shopping from './pages/ShoppingList/Shopping';
import Authentication from './pages/Authentication/Authentication';
import SignUp from './pages/Authentication/Signup';
import Login from './pages/Authentication/Login';
import AboutUs from './pages/AboutUs/AboutUs';
import Ingredients from './pages/Ingredients/Ingredients';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
