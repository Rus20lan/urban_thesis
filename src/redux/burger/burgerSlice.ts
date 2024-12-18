import { createSlice } from '@reduxjs/toolkit';

interface BurgerState {
  toggle: boolean;
}

const initialState: BurgerState = {
  toggle: false,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    toggleBurger: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleBurger } = burgerSlice.actions;

export default burgerSlice.reducer;
