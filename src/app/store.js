import clothesReducer, { clothesFetch } from "../features/clothesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { clothesApi } from "../features/clothesApi";
export const store = configureStore({
  reducer: {
    clothes: clothesReducer,
    [clothesApi.reducerPath]: clothesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clothesApi.middleware),
});
store.dispatch(clothesFetch());
