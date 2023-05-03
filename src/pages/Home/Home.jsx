import React from 'react';
import './Home.css';
import Recipes from '../Recipes/Recipes';
import Ingredients from '../Ingredients/Ingredients';
import BotButton from '../../components/BotButton/BotButton';
class Home extends React.Component {
  render() {
    return (
    <div className="Home">
      <Recipes />
      <Ingredients />
      <BotButton />
    </div>
    );
  }
}

export default Home;
