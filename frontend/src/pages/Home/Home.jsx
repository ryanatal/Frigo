import React from 'react';
import Ingredients1 from '../Ingredients1/Ingredients1';
import './Home.css';
import Recipes from '../Recipes/Recipes';

class Home extends React.Component {
  render() {
    return (
    <div className="Home">
    <Recipes />
    <Ingredients1 />
    </div>
    );
  }
}

export default Home;
