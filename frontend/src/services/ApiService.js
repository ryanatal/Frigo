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
};


export const getAisle = async () => {
    const module = await import("../data/data.js");
    const aisles = [];
    module.Ingredients.forEach((ingredient) => {
       ingredient.categoryPath.forEach((aisle) => {
           aisles.push(aisle);
       })
    })
    const ingredients = [];
    aisles.forEach((aisle) => {
    const ingredientList = [];
    module.Ingredients.forEach((ingredient) => {
        ingredient.categoryPath.forEach((aisle1) => {
            if (aisle1 === aisle) {
                ingredientList.push(ingredient.name);
            }
        })
    })
    ingredients.push(ingredientList);
   })

    const list = [ aisles, ingredients ];
    return list;
};


// export const getAisle = async () => {
//     const module = await import("../data/data.js");
//         const aisles = [];
//         console.log("length: "+ module.RecipesInfo[1].extendedIngredients.length);
//         module.RecipesInfo[1].extendedIngredients.forEach((ingredient) => {
//             aisles.push(ingredient.aisle);
//         })
//         const ingredients = [];
//         aisles.forEach((aisle) => {
//             const ingredientList = [];
//             module.RecipesInfo[1].extendedIngredients.forEach((ingredient) => {
//                 if (ingredient.aisle === aisle) {
//                     ingredientList.push(ingredient.name);
//                 }
//             })
//             ingredients.push(ingredientList);
            
//         })
//         const aisleIngredients = [ aisles, ingredients ];
//         for (let i = 0; i < aisleIngredients.length; i++) {
//             var innerLength = aisleIngredients[i].length;
//             for (let j = 0; j < innerLength; j++) {
//                 console.log('[' + i + ',' + j + '] = ' + aisleIngredients[i][j]);
//             }
//         }
//         return aisleIngredients;
// };


