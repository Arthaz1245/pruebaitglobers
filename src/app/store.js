import clothesReducer, { clothesFetch } from "../features/clothesSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    clothes: clothesReducer,
  },
});
store.dispatch(clothesFetch());
