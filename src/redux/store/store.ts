import { configureStore } from '@reduxjs/toolkit';
import burgerSlice from '../burger/burgerSlice';

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
