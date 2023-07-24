import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {allCountriesAxios} from '../../config';

export const getAllCountries = createAsyncThunk(
  'countries/all',
  async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
      const res = await allCountriesAxios.get('/all');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  allCountries: null,
  allCountriesNames: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(getAllCountries.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.allCountries = action.payload;
      state.allCountriesNames = action.payload
        .map(country => country.name.common)
        .sort((a, b) => (a > b ? 1 : -1));
      state.error = null;
    });
    builder.addCase(getAllCountries.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
  },
});

export default countriesSlice.reducer;
