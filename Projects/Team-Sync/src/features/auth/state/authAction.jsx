import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";
import { toast } from "react-toastify";

export const loginEmployee = createAsyncThunk("auth/login", async(credentials, thunkApi) => {
  try {
    let res = await axiosInstance.post("/api/auth/login", credentials);
    return res.data.data;
  } catch (error) {
    return thunkApi.rejectWithValue("login failed: ", error);
  }
});

export const currentLoggedEmployee = createAsyncThunk("auth/me", async(_, thunkApi) => {
  try {
    let res = await axiosInstance.get("/api/auth/me");
    return res.data.user
  } catch (error) {
    return thunkApi.rejectWithValue("unauthorized user");
  }
})