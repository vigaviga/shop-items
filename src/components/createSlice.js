import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shopItemsToAdd: [],
    shopItems: [],
    value: 0
};

export const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {
        addShopItemsToAdd: (state, action) => {
           state.shopItemsToAdd.push(action.payload)
        },
        addShopItems: (state, action) => {
           state.shopItems = state.shopItems.concat(action.payload);
           return state;
        },
        clearShopitemsToAdd: (state) => {
            state.shopItemsToAdd = [];
        }
    }
})

export const {addShopItemsToAdd, addShopItems, clearShopitemsToAdd} = shopItemsSlice.actions;
export default shopItemsSlice.reducer;