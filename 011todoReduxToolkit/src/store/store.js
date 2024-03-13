import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlices";

export const store = configureStore({
  reducer: todoReducer
})