import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchFavoriteAdverts = createAsyncThunk(
//   'adverts/fetch',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/favorite');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const addToFavorite = createAsyncThunk(
  'favorite/addToFavorite',
  async (advert, thunkAPI) => {
    try {
      const response = await axios.post(
        '/favorite',
        advert
        // { body: JSON.stringify(advert), }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'favorite/deleteFromFavorite',
  async (carID, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorite/${carID}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
