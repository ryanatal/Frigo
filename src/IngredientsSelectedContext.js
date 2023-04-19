import React from "react";

export const IngredientsSelectedContext = React.createContext(
    {
        selectedIngredients: [],
        setSelectedIngredients: () => { },
    }
);