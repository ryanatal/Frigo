export const getIngredients = async () => {
    const module = await import("../data/data.js");
    return module.Ingredients;
}

export const getRecipeInfo = async (id) => {
    const module = await import("../data/data.js");
    return module.RecipesInfo[id];
}

export const getRecipeMeasurements = async (id) => {
    const module = await import("../data/data.js");
    const ingredients = [];
    module.RecipesInfo[id].extendedIngredients.forEach((ingredient) => {
        ingredients.push(ingredient.original);
    })
    return ingredients;
};

export const getRecipeIngredients = async (id) => {
    const module = await import("../data/data.js");
    const ingredients = [];
    module.RecipesInfo[id].extendedIngredients.forEach((ingredient) => {
        ingredients.push(ingredient.name);
    })
    return ingredients;
};

export const getRecipeInstructions = async (id) => {
    const module = await import("../data/data.js");
    console.log("steps module: " + module.AnalyzedInstructions[id].steps);
    return module.AnalyzedInstructions[id].steps;
}