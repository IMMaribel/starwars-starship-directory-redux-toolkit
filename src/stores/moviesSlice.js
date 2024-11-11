import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (movieUrls, { rejectWithValue }) => {
    try {
      const movies = await Promise.all(
        movieUrls.map(async (url) => {
          const response = await axios.get(url);
          const data = response.data;
          const movieId = url.match(/\/films\/(\d+)\//)[1];

          return {
            ...data,
            id: movieId,
            imageUrl: `https://starwars-visualguide.com/assets/img/films/${movieId}.jpg`
          };
        })
      );
      return movies;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch movies');
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    resetMovies: (state) => {
      state.movies = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
