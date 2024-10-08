import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articleSlice'
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
