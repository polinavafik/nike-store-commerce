import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import FavoritesSlice from "./FavoritesSlice.js";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    favorites: FavoritesSlice,
  },
});

export default Store;
