import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnimate: false,
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAnimate(state, action) {
      state.isAnimate = action.payload || !state.isAnimate;
    },
  },
});

export const {setAnimate} = aboutSlice.actions


export default aboutSlice.reducer;