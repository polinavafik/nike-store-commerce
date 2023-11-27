import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  favoritesState: false,
  favoritesItems: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
  favoritesTotalQuantity: 0,
};

const FavoritesSlice = createSlice({
  initialState,
  name: "favorites",
  reducers: {
    setOpenFavorites: (state, action) => {
      state.favoritesState = action.payload.favoritesState;
    },
    setCloseFavorites: (state, action) => {
      state.favoritesState = action.payload.favoritesState;
    },
    toggleToFavorites: (state, action) => {
      const itemIndex = state.favoritesItems.findIndex(
        item => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.favoritesItems = state.favoritesItems.filter(
          item => item.id !== action.payload.id
        );

        toast.success(`${action.payload.title} removed from Favorites`);
      } else {
        const item = { ...action.payload };
        state.favoritesItems.push(item);

        toast.success(`${action.payload.title} added to Favorites`);
      }

      state.favoritesTotalQuantity = state.favoritesItems.length;
      localStorage.setItem("favorites", JSON.stringify(state.favoritesItems));
    },
    clearFavorites: state => {
      state.favoritesItems = [];
      toast.success(`Favorites cleared`);
      localStorage.setItem("favorites", JSON.stringify(state.favoritesItems));
    },
  },
});

export const {
  setCloseFavorites,
  setOpenFavorites,
  toggleToFavorites,
  clearFavorites,
} = FavoritesSlice.actions;

export const selectFavoritesState = state => state.favorites.favoritesState;
export const selectFavoritesItems = state => state.favorites.favoritesItems;
export const selectTotalFavQTY = state =>
  state.favorites.favoritesTotalQuantity;

export default FavoritesSlice.reducer;
