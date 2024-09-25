import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articleSlice'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
