// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
   reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer, // Include the API reducer
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
         apiSlice.middleware
      ), // Include middleware for caching and async logic
});
