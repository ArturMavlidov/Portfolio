import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnimate: false,
  isContentVisible: {
    education: false,
    goals: false,
    skills: false,
    experience: false,
  },
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
        isContentVisible: {...state.isContentVisible, ...payload}
      }
    },
    disallowContentVisible(state) {
      return {
        ...state,
        isContentVisible: { education: false, goals: false, skills: false, experience: false },
      };
    }
  },
});

export const {
  setAnimate,
  setElementsToReverseAnimate,
  setContentVisible,
  disallowContentVisible,
} = aboutSlice.actions;


export default aboutSlice.reducer;