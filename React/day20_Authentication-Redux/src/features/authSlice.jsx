import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth", 
    initialState: {
        user: null,
        isAuthentication: false,
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
            state.isAuthentication = true
        },
        removeUser: (state) => {
            state.user = null
        }
    }
});

export const {addUser, removeUser} = authSlice.actions;
export default authSlice.reducer;