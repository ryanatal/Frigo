import React from 'react';
import Ingredients from '../Ingredients/Ingredients';
import './Home.css';
import Recipes from '../Recipes/Recipes';

class Home extends React.Component {
  render() {
    return (
    <div className="Home">
    <Recipes />
    <Ingredients />
    </div>
    );
  }
}

export default Home;
