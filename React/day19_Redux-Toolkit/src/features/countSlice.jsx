import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count', 
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.count++;
            console.log(action)
        },
        decrement: (state) => {
            state.count--;
        }
    }
})
console.log(countSlice);
  
export const {increment, decrement} = countSlice.actions;
export default countSlice.reducer