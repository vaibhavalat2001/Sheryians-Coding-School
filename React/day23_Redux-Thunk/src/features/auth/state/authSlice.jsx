import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authAction";
import { toast } from "react-toastify";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isAutheticated: false,
  },
//   reducers: {
//     addUser: (state, action) => {
//       state.user = action.payload;
//       state.isLoading = false;
//     },
//     removeUser: (state) => {
//       state.user = null;
//       state.isLoading = false;
//     },
//   },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAutheticated = true;
        state.isLoading = false;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("login failed");
      })
      .addCase(hydrateUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hydrateUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAutheticated = true;
        state.isLoading = false;
      })
      .addCase(hydrateUserAction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
