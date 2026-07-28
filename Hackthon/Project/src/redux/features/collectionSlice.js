import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom, Bounce } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },

    addToast: () => {
      toast.success("Added to Collection ✅", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },

    removeToast: () => {
      toast.error("Removed from Collection ❌", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },

    clearToast: () => {
      toast("All Collection Cleared", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
  },
});

export const {
  addCollection,
  removeCollection,
  clearCollection,
  addToast,
  removeToast,
  clearToast
} = collectionSlice.actions;
export default collectionSlice.reducer;
