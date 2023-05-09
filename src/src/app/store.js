import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer";

const store = configureStore({
  reducer: appReducer,
  devTools: process.env.REACT_APP_IN_PRODUCT == 0,
});

export default store;
