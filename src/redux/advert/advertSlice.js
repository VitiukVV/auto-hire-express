import { createSlice } from '@reduxjs/toolkit';
import {
  fetchHandleFulfilled,
  filterHandleFulfilled,
  handlePending,
  handleRejected,
  startFetchHandleFulfilled,
} from './helpers';
import {
  fetchAdverts,
  filterAdvertsByBrand,
  filterAdvertsByPrice,
  startFetchAdverts,
} from './advertOperations';
import { initialState } from './initialState';

const advertSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(startFetchAdverts.fulfilled, startFetchHandleFulfilled)
      .addCase(fetchAdverts.fulfilled, fetchHandleFulfilled)
      .addCase(filterAdvertsByBrand.fulfilled, filterHandleFulfilled)
      .addCase(filterAdvertsByPrice.fulfilled, filterHandleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const advertReducer = advertSlice.reducer;
