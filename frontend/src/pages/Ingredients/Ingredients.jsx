import React from 'react';
import './Ingredients.css';


class Ingredients extends React.Component {
    render(){
        return (
            <div>
                <div id="search__container">
                    <input id="search__input" type="text" placeholder="Search for ingredient groups" />
                    <input type = "button" id = "getIngredients" value = "View Ingredients"/>
                </div>
                &nbsp;
                &nbsp;
                <div id="slider">
                    <div id="ingredientContainer">
                        <div class="ingredientCard">
                            <div class="ingredientImage">
                                <div class="ingredientButton">Show More</div>
                                </div>

                                <div class="ingredientContent">
                                <h2 class="ingredientTitle">Ingredient Group 1</h2>
                                <ul class="ingredientList">
                                    <li>Ingredient 1</li>
                                    <li>Ingredient 2</li>
                                    <li>Ingredient 3</li>
                                </ul>
                            </div>
                         </div>
                    
                        <div class="ingredientCard">
                            <div class="ingredientImage">
                                <div class="ingredientButton">Show More</div>
                                </div>

                            <div class="ingredientContent">
                                <h2 class="ingredientTitle">Ingredient Group 2</h2>
                                <ul class="ingredientList">
                                    <li>Ingredient 1</li>
                                    <li>Ingredient 2</li>
                                    <li>Ingredient 3</li>
                                </ul>
                            </div>
                        </div>

                    
                        <div class="ingredientCard">
                            <div class="ingredientImage">
                                <div class="ingredientButton">Show More</div>
                                </div>

                            <div class="recipe__content">
                                <h2 class="ingredientTitle">Ingredient Group 3</h2>
                                <ul class="ingredientList">
                                    <li>Ingredient 1</li>
                                    <li>Ingredient 2</li>
                                    <li>Ingredient 3</li>
                                </ul>
                            </div>
                        </div>
                    

                    
                        <div class="ingredientCard">
                            <div class="ingredientImage">
                                <div class="ingredientButton">Show More</div>
                                </div>

                            <div class="recipe__content">
                                <h2 class="ingredientTitle">Ingredient Group 4</h2>
                                <ul class="ingredientList">
                                    <li>Ingredient 1</li>
                                    <li>Ingredient 2</li>
                                    <li>Ingredient 3</li>
                                </ul>
                            </div>
                        </div>

                        <div class="ingredientCard">
                            <div class="ingredientImage">
                                <div class="ingredientButton">Show More</div>
                                </div>

                            <div class="recipe__content">
                                <h2 class="ingredientTitle">Ingredient Group 5</h2>
                                <ul class="ingredientList">
                                    <li>Ingredient 1</li>
                                    <li>Ingredient 2</li>
                                    <li>Ingredient 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}

export default Ingredients;