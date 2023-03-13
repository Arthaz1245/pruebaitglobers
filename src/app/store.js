import clothesReducer, { clothesFetch } from "../features/clothesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { clothesApi } from "../features/clothesApi";
import cartReducer, { getTotals } from "../features/cartSlice";
export const store = configureStore({
  reducer: {
    clothes: clothesReducer,
    cart: cartReducer,
    [clothesApi.reducerPath]: clothesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clothesApi.middleware),
});
store.dispatch(clothesFetch());
store.dispatch(getTotals());
