import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAdverts,
  filterAdvertsByBrand,
  startFetchAdverts,
} from './advertOperations';
import {
  fetchHandleFulfilled,
  filterHandleFulfilled,
  handlePending,
  handleRejected,
  startFetchHandleFulfilled,
} from './helpers';
import { initialState } from './initialState';

const advertSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(startFetchAdverts.fulfilled, startFetchHandleFulfilled)
      .addCase(fetchAdverts.fulfilled, fetchHandleFulfilled)
      .addCase(filterAdvertsByBrand.fulfilled, filterHandleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const advertReducer = advertSlice.reducer;
