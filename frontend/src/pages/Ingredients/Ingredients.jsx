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
                            <div>
                                <div class="ingredientButton">Show More</div>
                                </div>

                                <div class="ingredientContent">
                                <h2 class="ingredientTitle">Ingredient Group 1</h2>
                                <ul class="ingredientList">
                                <form id="ingredientGroup1">
                                        <li> <input type="checkbox" id="ingredient1_1" name="ingredient1_1" value="Ingredient 1"></input> <label for="ingredient1_1">Ingredient 1</label> </li>
                                        <li> <input type="checkbox" id="ingredient1_2" name="ingredient1_2" value="Ingredient 2"></input> <label for="ingredient1_2">Ingredient 2</label> </li>
                                        <li> <input type="checkbox" id="ingredient1_3" name="ingredient1_3" value="Ingredient 3"></input> <label for="ingredient1_3">Ingredient 3</label> </li>
                                        <li> <input type="checkbox" id="ingredient1_4" name="ingredient1_4" value="Ingredient 4"></input> <label for="ingredient1_4">Ingredient 4</label></li>
                                        <li> <input type="checkbox" id="ingredient1_5" name="ingredient1_5" value="Ingredient 5"></input> <label for="ingredient1_5">Ingredient 5</label></li>
                                        <li> <input type="checkbox" id="ingredient1_6" name="ingredient1_6" value="Ingredient 6"></input> <label for="ingredient1_6">Ingredient 6</label></li>
                                    </form>
                                </ul>
                            </div>
                         </div>
                    
                        <div class="ingredientCard">
                            <div>
                                <div class="ingredientButton">Show More</div>
                                </div>

                            <div class="ingredientContent">
                                <h2 class="ingredientTitle">Ingredient Group 2</h2>
                                <ul class="ingredientList">
                                <form id="ingredientGroup2">
                                        <li> <input type="checkbox" id="ingredient2_1" name="ingredient2_1" value="Ingredient 1"></input> <label for="ingredient2_1">Ingredient 1</label> </li>
                                        <li> <input type="checkbox" id="ingredient2_2" name="ingredient2_2" value="Ingredient 2"></input> <label for="ingredient2_2">Ingredient 2</label> </li>
                                        <li> <input type="checkbox" id="ingredient2_3" name="ingredient2_3" value="Ingredient 3"></input> <label for="ingredient2_3">Ingredient 3</label> </li>
                                        <li> <input type="checkbox" id="ingredient2_4" name="ingredient2_4" value="Ingredient 4"></input> <label for="ingredient2_4">Ingredient 4</label></li>
                                        <li> <input type="checkbox" id="ingredient2_5" name="ingredient2_5" value="Ingredient 5"></input> <label for="ingredient2_5">Ingredient 5</label></li>
                                        <li> <input type="checkbox" id="ingredient2_6" name="ingredient2_6" value="Ingredient 6"></input> <label for="ingredient2_6">Ingredient 6</label></li>
                                    </form>
                                </ul>
                            </div>
                        </div>

                    
                        <div class="ingredientCard">
                            <div>
                                <div class="ingredientButton">Show More</div>
                                </div>

                            <div class="recipe__content">
                                <h2 class="ingredientTitle">Ingredient Group 3</h2>
                                <ul class="ingredientList">
                                    <form id="ingredientGroup3">
                                        <li> <input type="checkbox" id="ingredient3_1" name="ingredient3_1" value="Ingredient 1"></input> <label for="ingredient3_1">Ingredient 1</label> </li>
                                        <li> <input type="checkbox" id="ingredient3_2" name="ingredient3_2" value="Ingredient 2"></input> <label for="ingredient3_2">Ingredient 2</label> </li>
                                        <li> <input type="checkbox" id="ingredient3_3" name="ingredient3_3" value="Ingredient 3"></input> <label for="ingredient3_3">Ingredient 3</label> </li>
                                        <li> <input type="checkbox" id="ingredient3_4" name="ingredient3_4" value="Ingredient 4"></input> <label for="ingredient3_4">Ingredient 4</label></li>
                                        <li> <input type="checkbox" id="ingredient3_5" name="ingredient3_5" value="Ingredient 5"></input> <label for="ingredient3_5">Ingredient 5</label></li>
                                        <li> <input type="checkbox" id="ingredient3_6" name="ingredient3_6" value="Ingredient 6"></input> <label for="ingredient3_6">Ingredient 6</label></li>
                                    </form>
                                </ul>
                            </div>
                        </div>
                    

                    
                        <div class="ingredientCard">
                            <div>
                                <div class="ingredientButton">Show More</div>
                                </div>

                            <div class="recipe__content">
                                <h2 class="ingredientTitle">Ingredient Group 4</h2>
                                <ul class="ingredientList">
                                <form id="ingredientGroup4">
                                        <li> <input type="checkbox" id="ingredient4_1" name="ingredient4_1" value="Ingredient 1"></input> <label for="ingredient4_1">Ingredient 1</label> </li>
                                        <li> <input type="checkbox" id="ingredient4_2" name="ingredient4_2" value="Ingredient 2"></input> <label for="ingredient4_2">Ingredient 2</label> </li>
                                        <li> <input type="checkbox" id="ingredient4_3" name="ingredient4_3" value="Ingredient 3"></input> <label for="ingredient4_3">Ingredient 3</label> </li>
                                        <li> <input type="checkbox" id="ingredient4_4" name="ingredient4_4" value="Ingredient 4"></input> <label for="ingredient4_4">Ingredient 4</label></li>
                                        <li> <input type="checkbox" id="ingredient4_5" name="ingredient4_5" value="Ingredient 5"></input> <label for="ingredient4_5">Ingredient 5</label></li>
                                        <li> <input type="checkbox" id="ingredient4_6" name="ingredient4_6" value="Ingredient 6"></input> <label for="ingredient4_6">Ingredient 6</label></li>
                                    </form>
                                </ul>
                            </div>
                        </div>

                        <div class="ingredientCard">
                            <div>
                                <div class="ingredientButton">Show More</div>
                                </div>

                            <div class="recipe__content">
                                <h2 class="ingredientTitle">Ingredient Group 5</h2>
                                <ul class="ingredientList">
                                <form id="ingredientGroup5">
                                        <li> <input type="checkbox" id="ingredient5_1" name="ingredient5_1" value="Ingredient 1"></input> <label for="ingredient5_1">Ingredient 1</label> </li>
                                        <li> <input type="checkbox" id="ingredient5_2" name="ingredient5_2" value="Ingredient 2"></input> <label for="ingredient5_2">Ingredient 2</label> </li>
                                        <li> <input type="checkbox" id="ingredient5_3" name="ingredient5_3" value="Ingredient 3"></input> <label for="ingredient5_3">Ingredient 3</label> </li>
                                        <li> <input type="checkbox" id="ingredient5_4" name="ingredient5_4" value="Ingredient 4"></input> <label for="ingredient5_4">Ingredient 4</label></li>
                                        <li> <input type="checkbox" id="ingredient5_5" name="ingredient5_5" value="Ingredient 5"></input> <label for="ingredient5_5">Ingredient 5</label></li>
                                        <li> <input type="checkbox" id="ingredient5_6" name="ingredient5_6" value="Ingredient 6"></input> <label for="ingredient5_6">Ingredient 6</label></li>
                                    </form>
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