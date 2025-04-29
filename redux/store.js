import { configureStore } from "@reduxjs/toolkit";
import candidatsReducer from "./candidatsSlice";

export const store = configureStore({
  reducer: {
    Candidats: candidatsReducer,
  },
});
