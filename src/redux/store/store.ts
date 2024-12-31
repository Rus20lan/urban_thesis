import { configureStore } from '@reduxjs/toolkit';
import burgerSlice from '../burger/burgerSlice';
import quizSlice from '../quiz/quizSlice';
import teamSlice from '../team/teamSlice';
import sneakersSlice from '../sneakers/sneakersSlice';
import filterSlice from '../filter/filterSlice';
import orderSlice from '../order/orderSlice';

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    filter: filterSlice,
    quiz: quizSlice,
    team: teamSlice,
    sneakers: sneakersSlice,
    order: orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
