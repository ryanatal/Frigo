import React from "react";

export const DietSelectedContext = React.createContext(
    {
        selectedDiet: [],
        setSelectedDiets: () => { },
    }
);