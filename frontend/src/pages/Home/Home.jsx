import React from 'react';
import './Home.css';
import Recipes from '../Recipes/Recipes';
import Ingredients from '../Ingredients/Ingredients';

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
