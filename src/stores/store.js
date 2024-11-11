import { configureStore } from "@reduxjs/toolkit";
import shipsReducer from './shipsSlice'
import authReducer from './authSlice'
import pilotsReducer from './pilotsSlice';

export const store = configureStore({
    reducer: {
        ships: shipsReducer,
        auth: authReducer,
        pilots: pilotsReducer,
    }
});

export default store;