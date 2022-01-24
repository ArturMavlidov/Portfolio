import { configureStore } from "@reduxjs/toolkit";
import {aboutReducer, contactReducer, homeReducer, portfolioReducer} from "./reducers";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    contact: contactReducer,
    home: homeReducer,
    portfolio: portfolioReducer
  },
});

export default store;
