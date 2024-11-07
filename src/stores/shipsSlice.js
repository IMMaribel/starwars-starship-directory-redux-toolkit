import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ships: [],
  status: 'idle',
  error: null,
  currentPage: 1,
};

export const fetchShips = createAsyncThunk('ships/fetchShips', async (page, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return { results: [], hasMore: false };
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      results: data.results.map(ship => ({
        ...ship,
        id: ship.url.match(/\/(\d+)\//)[1]
      })),
      hasMore: data.next !== null
    };
  } catch (error) {
    return rejectWithValue(error.message);
  }
}
);

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {
    incrementPage(state) {
      if (state.hasMore) {
        state.currentPage += 1;
      }
    },
    resetShips(state) {
      state.ships = [];
      state.currentPage = 1;
      state.status = 'idle';
      state.error = null;
      state.hasMore = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShips.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchShips.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hasMore = action.payload.hasMore;
     
        const newShips = action.payload.results.filter(
          newShip => !state.ships.some(existingShip => existingShip.id === newShip.id)
        );
        state.ships = [...state.ships, ...newShips];
      })
      .addCase(fetchShips.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch ships';
      });
  },
});

export const { incrementPage , resetShips } = shipsSlice.actions;
export default shipsSlice.reducer;