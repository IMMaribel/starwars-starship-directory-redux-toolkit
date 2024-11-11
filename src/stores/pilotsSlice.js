import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pilots: [],
  status: 'idle',
  error: null,
}

export const fetchPilots = createAsyncThunk(
  'pilots/fetchPilots',
  async (pilotUrls, { rejectWithValue }) => {
    try {
      const pilots = await Promise.all(
        pilotUrls.map(async (url) => {
          const response = await axios.get(url);
          const data = response.data;
          const pilotId = url.match(/\/people\/(\d+)\//)[1];

          const imageUrl= `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;

          return {
            ...data,
            id: pilotId,
            imageUrl: imageUrl,
          };
        })
      );
      return pilots;
    } catch (error) {
      return rejectWithValue(error.message|| 'Failed to fetch pilots');
    }
  }
);

const pilotsSlice = createSlice({
  name: 'pilots',
  initialState,
  reducers: {
    resetPilots: (state) => {
      state.pilots = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPilots.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPilots.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pilots = action.payload;
        state.error = null;
      })
      .addCase(fetchPilots.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetPilots } = pilotsSlice.actions;
export default pilotsSlice.reducer;
