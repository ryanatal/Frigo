import React from 'react';
import Ingredients from '../Ingredients/Ingredients';
import './Home.css';
import Recipe from '../Recipe/Recipe';

class Home extends React.Component {
  render() {
    return (
    <div className="Home">
    <Recipe />
    <Ingredients />
    </div>
    );
  }
}

export default Home;
