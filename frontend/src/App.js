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

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
