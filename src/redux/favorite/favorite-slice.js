import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import {
  addHandleFulfilled,
  deleteHandleFulfilled,
  pending,
  rejected,
} from './favorite-helpers';
import { addToFavorite, deleteFromFavorite } from './favorite-operations';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addToFavorite.fulfilled, addHandleFulfilled)
      .addCase(deleteFromFavorite.fulfilled, deleteHandleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});
