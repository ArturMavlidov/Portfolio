import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "#000",
};

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    dark: (state) => {
      state.value = '#000'
    },
    light: (state) => {
      state.value = '#fff'
    }
  }
});

export const {dark, light} = visibilitySlice.actions;

export default visibilitySlice.reducer;
