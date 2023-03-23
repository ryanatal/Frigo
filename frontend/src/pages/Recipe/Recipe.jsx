import React from 'react';
import './Recipe.css';
import recipe_img from '../../assets/recipe1.jpg';


class Recipe extends React.Component {
  render() {
    return (
    <div>
      <div id="searchbar">
        <input id="search_input" type="text" placeholder="Search for recipes" />
        <input type = "button" id = "shopping_list" value = "Shopping List"/>
      </div>
      
 
      <div id="slider">
      <div id="container">

      <div class="card">
         <img id="recipe_img" src={recipe_img} alt="recipe_img" />
            <div class="content">
                <h2 class="title">Truffle Pasta</h2>
                <p class="description">Truffle cheese, heavy cream, baby bella mushrooms, garlic, and pasta.</p>
                <div class="button">View Recipe</div>
            </div>

      </div>

      <div class="card">
         <img id="recipe_img" src={recipe_img} alt="recipe_img" />
            <div class="content">
                <h2 class="title">Recipe Title</h2>
                <p class="description">Whole wheat pizza, pesto sauce, burrata cheese, and cherry.</p>
                <div class="button">View Recipe</div>
            </div>

      </div>
      <div class="card">
         <img id="recipe_img" src={recipe_img} alt="recipe_img" />
            <div class="content">
                <h2 class="title">Recipe Title</h2>
                <p class="description">Short description of the recipe</p>
                <div class="button">View Recipe</div>
            </div>

      </div>
      <div class="card">
         <img id="recipe_img" src={recipe_img} alt="recipe_img" />
            <div class="content">
                <h2 class="title">Recipe Title</h2>
                <p class="description">Short description of the recipe</p>
                <div class="button">View Recipe</div>
            </div>

      </div>
      <div class="card">
         <img id="recipe_img" src={recipe_img} alt="recipe_img" />
            <div class="content">
                <h2 class="title">Recipe Title</h2>
                <p class="description">Short description of the recipe</p>
                <div class="button">View Recipe</div>
            </div>

      </div>
      <div class="card">
         <img id="recipe_img" src={recipe_img} alt="recipe_img" />
            <div class="content">
                <h2 class="title">Recipe Title</h2>
                <p class="description">Short description of the recipe</p>
                <div class="button">View Recipe</div>
            </div>

      </div>
      <div class="card">
         <img id="recipe_img" src={recipe_img} alt="recipe_img" />
            <div class="content">
                <h2 class="title">Recipe Title</h2>
                <p class="description">Short description of the recipe</p>
                <div class="button">View Recipe</div>
            </div>

      </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Recipe;
