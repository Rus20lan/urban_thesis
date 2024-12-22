import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "../burger/burgerSlice";
import quizSlice from "../quiz/quizSlice";
import teamSlice from "../team/teamSlice";

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    quiz: quizSlice,
    team: teamSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
