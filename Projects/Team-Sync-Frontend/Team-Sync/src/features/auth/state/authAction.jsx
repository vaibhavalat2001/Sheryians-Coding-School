import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";

const authAction = createAsyncThunk("auth/login", (credential, thunkApi) => {
  try {
    let res = axiosInstance.post("/auth/login", credential);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue("login failed: ", error);
  }
});
