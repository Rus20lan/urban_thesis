import { createSlice } from '@reduxjs/toolkit';

interface QuizState {
  isAnswer: boolean;
  firstAnswer: string[];
  secondAnswer: string[];
}

const initialState: QuizState = {
  isAnswer: false,
  firstAnswer: [],
  secondAnswer: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerIsGiven: (state) => {
      state.isAnswer = true;
    },
    answerIsNotGiven: (state) => {
      state.isAnswer = false;
    },

    addAnswerInFirstPool: (state, { payload }) => {
      state.firstAnswer.push(payload);
    },
    removeAnswerInFirstPool: (state, { payload }) => {
      state.firstAnswer = state.firstAnswer.filter(
        (_, index) => index !== payload
      );
    },
    addAnswerInSecondPool: (state, { payload }) => {
      state.secondAnswer.push(payload);
    },
    removeAnswerInSecondPool: (state, { payload }) => {
      state.secondAnswer = state.secondAnswer.filter(
        (_, index) => index !== payload
      );
    },
  },
});

export const {
  answerIsGiven,
  answerIsNotGiven,
  addAnswerInFirstPool,
  removeAnswerInFirstPool,
  addAnswerInSecondPool,
  removeAnswerInSecondPool,
} = quizSlice.actions;

export default quizSlice.reducer;
