import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnimate: false,
  isContentVisible: false,
  elementsToReverseAnimate: {},
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAnimate(state, {payload}) {
      if (payload !== undefined) {
        return {
          ...state,
          isAnimate: payload,
        };
      }
      return {
        ...state,
        isAnimate: !state.isAnimate
      }
    },
    setElementsToReverseAnimate(state, {payload}) {
      return {
        ...state,
        elementsToReverseAnimate: {...payload}
      };
    },
    setContentVisible(state, {payload}) {
      return {
        ...state,
        isContentVisible: payload
      }
    }
  },
});

export const { setAnimate, setElementsToReverseAnimate, setContentVisible } =
  aboutSlice.actions;


export default aboutSlice.reducer;