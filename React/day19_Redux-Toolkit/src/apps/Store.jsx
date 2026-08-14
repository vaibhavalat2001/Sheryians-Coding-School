import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CountSlice'
import cartReducer from '../features/cartItem'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    }
})