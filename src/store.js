import { configureStore } from '@reduxjs/toolkit'
import shopItemsReducer from './components/createSlice'

export const store = configureStore({
    reducer: {
        shopItems: shopItemsReducer
    },
})
