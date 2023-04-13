import React from 'react';
import Ingredients1 from '../Ingredients1/Ingredients1';
import './Home.css';
import Recipes from '../Recipes/Recipes';
import Ingredients2 from '../Ingredients2/Ingredients2';

class Home extends React.Component {
  render() {
    return (
    <div className="Home">
    <Recipes />
    <Ingredients2 />
    </div>
    );
  }
}

export default Home;
