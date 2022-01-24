import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
  },
});

export const {inc, dec} = homeSlice.actions;

export default homeSlice.reducer;

