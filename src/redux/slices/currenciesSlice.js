import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {currencyAxios} from '../../config';

export const getAllCurrencies = createAsyncThunk(
  'currencies/all',
  async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
      const res = await currencyAxios.get('/currencies');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getTimeSeries = createAsyncThunk(
  'currencies/timeseries',
  async ({date, from, to}, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
      const res = await currencyAxios.get(`/${date}..?from=${from}&to=${to}`);
      return res.data;
    } catch (error) {
      console.log('ooooo');
      return rejectWithValue(error.message);
    }
  },
);

export const getLatestRate = createAsyncThunk(
  'currencies/latest',
  async ({from, to}, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
      const res = await currencyAxios.get(`/latest?from=${from}&to=${to}`);
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
  allCurrencies: null,
  ratesData: [],
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: initialState,
  extraReducers: builder => {
    // getAllCurrencies
    builder.addCase(getAllCurrencies.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCurrencies.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      const currencies = Object.keys(action.payload);
      state.allCurrencies = currencies;
      state.error = null;
    });
    builder.addCase(getAllCurrencies.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
    // getTimeSeries
    builder.addCase(getTimeSeries.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTimeSeries.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      const dates = Object.keys(action.payload.rates);
      const to = Object.keys(action.payload.rates[dates[0]])[0];
      state.ratesData = dates.map(date => action.payload.rates[date][to]);
      state.error = null;
    });
    builder.addCase(getTimeSeries.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
    // getLatestRate
    builder.addCase(getLatestRate.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLatestRate.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      const to = Object.keys(action.payload.rates);
      state.ratesData = Array(24)
        .fill(0)
        .map(_ => action.payload.rates[to[0]]);
      state.error = null;
    });
    builder.addCase(getLatestRate.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
  },
});

export default currenciesSlice.reducer;
