import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    pantry: [],
    shoppingList: [],
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setPantry: (state, action) => {
            state.pantry = action.payload;
        },
        setPantryItem: (state, action) => {
            //add item to pantry if it doesn't exist
            if (!state.pantry.some(item => item.id === action.payload.id)) {
                state.pantry.push(action.payload);
            }
        },
        setShoppingList: (state, action) => {
            //add items to shopping list if they don't exist
            action.payload.forEach(item => {
                if (!state.shoppingList.some(i => i.id === item.id)) {
                    state.shoppingList.push(item);
                }
            }
            );
        },
        sendIngredientsToShoppingList: (state, action) => {
            //add each item in the array to the shopping list if it doesn't exist
            action.payload.forEach(item => {
                if (!state.shoppingList.some(i => i.id === item.id)) {
                    state.shoppingList.push(item);
                }
            });
        }
    },
});

export const { setLogin, setLogout, setPantry, setPantryItem, setShoppingList, sendIngredientsToShoppingList } = authSlice.actions;

export default authSlice.reducer;