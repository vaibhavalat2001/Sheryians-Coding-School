import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CountSlice'
import cartReducer from '../features/cartItemSlice'

export const store = configureStore({
    reducer: {
        count: counterReducer,
        cart: cartReducer,
    }
})
