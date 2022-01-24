import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


export const portfolioSlice = createSlice({
  name: "portfolio",
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

export default portfolioSlice.reducer;
