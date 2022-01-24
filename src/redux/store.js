import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./reducers";

const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
  },
});

export default store;
