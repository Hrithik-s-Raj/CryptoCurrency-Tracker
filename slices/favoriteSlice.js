import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { addToFavorites } = favoriteSlice.actions;

export const selectfavorite = (state) => state.favorite.favorites;

export default favoriteSlice.reducer;
