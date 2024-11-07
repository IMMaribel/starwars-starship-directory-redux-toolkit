import { configureStore } from "@reduxjs/toolkit";
import shipsReducer from './shipsSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        ships: shipsReducer,
        auth: authReducer,
    }
});

export default store;