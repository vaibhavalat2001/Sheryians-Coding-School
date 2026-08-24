import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedEmployee, loginEmployee } from "./authAction";
import { toast } from "react-toastify";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoading: true,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
        toast.success("Logged Successfully");
      })
      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false;
        toast.error("Invalid user")
      })
      .addCase(currentLoggedEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentLoggedEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })
      .addCase(currentLoggedEmployee.rejected, (state) => {
        state.isLoading = false;
        toast.error("Unauthorized user");
      });
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
