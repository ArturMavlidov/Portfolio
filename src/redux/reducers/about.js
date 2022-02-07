import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnimate: false,
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAnimate: (state) => {
      state.isAnimate = !state.isAnimate;
    },
  },
});

export const {setAnimate} = aboutSlice.actions


export default aboutSlice.reducer;