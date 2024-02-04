import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65bb75f652189914b5bc35bf.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetch',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('/advert/', {
        params: {
          page,
          limit: 12,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const startFetchAdverts = createAsyncThunk(
  'startAdverts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert/', {
        params: {
          page: 1,
          limit: 12,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const filterAdvertsByBrand = createAsyncThunk(
  'filterAdvertsByBrand/fetch',
  async (make, thunkAPI) => {
    try {
      const response = await axios.get('/advert/', {
        params: {
          make,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
