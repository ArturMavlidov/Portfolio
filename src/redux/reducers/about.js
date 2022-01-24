import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const aboutSlice = createSlice({
  name: "about",
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


export default aboutSlice.reducer;