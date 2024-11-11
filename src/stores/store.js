import { configureStore } from "@reduxjs/toolkit";
import shipsReducer from './shipsSlice'
import authReducer from './authSlice'
import pilotsReducer from './pilotsSlice';
import filmsReducer from './moviesSlice'

export const store = configureStore({
    reducer: {
        ships: shipsReducer,
        auth: authReducer,
        pilots: pilotsReducer,
        movies: filmsReducer,
    }
});

export default store;