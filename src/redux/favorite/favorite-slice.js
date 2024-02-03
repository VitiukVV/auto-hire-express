import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import {
  addHandleFulfilled,
  deleteHandleFulfilled,
  // fetchFavoriteHandleFulfilled,
  pending,
  rejected,
} from './favorite-helpers';
import {
  addToFavorite,
  deleteFromFavorite,
  // fetchFavoriteAdverts,
} from './favorite-operations';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(fetchFavoriteAdverts.fulfilled, fetchFavoriteHandleFulfilled)
      .addCase(addToFavorite.fulfilled, addHandleFulfilled)
      .addCase(deleteFromFavorite.fulfilled, deleteHandleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});
