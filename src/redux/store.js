import { configureStore } from "@reduxjs/toolkit";
import {aboutReducer, contactReducer, homeReducer, portfolioReducer} from "./reducers";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    contact: contactReducer,
    home: homeReducer,
    portfolio: portfolioReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["about/setElementsToReverseAnimate"],
        ignoredPaths: ["about.elementsToReverseAnimate"],
      },
    }),
});

export default store;
