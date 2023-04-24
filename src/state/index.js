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
            state.pantry = action.payload.pantry;
        },
        setShoppingList: (state, action) => {
            state.shoppingList = action.payload.shoppingList;
        }
    },
});

export const { setLogin, setLogout, setPantry, setShoppingList } = authSlice.actions;

export default authSlice.reducer;