import React from "react";

export const PantryIngredientsSelectedContext = React.createContext(
    {
        selectedPantryIngredients: [],
        setSelectedPantryIngredients: () => { },
    }
);