import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ships: [],
  status: 'idle',
  error: null,
  currentPage: 1,
};

export const fetchShips = createAsyncThunk('ships/fetchShips', async (page) => {
  const response = await fetch(`https://swapi.py4e.com/api/starships/?page=${page}`);
  const data = await response.json();
  return data;
});

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShips.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShips.fulfilled, (state, action) => {
        const currentShipsSet = new Set(action.payload.results);
   
        state.status = 'succeeded';
        state.ships = Array.from(currentShipsSet);
      })
      .addCase(fetchShips.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch ships';
      });
  },
});

export default shipsSlice.reducer;