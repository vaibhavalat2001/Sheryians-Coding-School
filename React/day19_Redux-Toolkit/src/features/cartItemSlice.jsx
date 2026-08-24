import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        cartItems: null
    },
    reducers: {
        addCart: (state, action) => {
            state.cartItems = action.payload;
        },
        removeCart: () => {}
    }
})

export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;