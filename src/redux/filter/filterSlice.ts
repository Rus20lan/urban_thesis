import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_FILTER_DATA } from '../../const/consts';

interface FilterState {
  isNotEmpty: boolean;
  filterObj: {
    price: {
      low: number;
      high: number;
    };
    gender: 'мужской' | 'женский' | null;
    size: number[];
  };
}

const initialState: FilterState = {
  isNotEmpty: false,
  filterObj: {
    price: {
      low: INITIAL_FILTER_DATA.PRICE_LOW,
      high: INITIAL_FILTER_DATA.PRICE_HIGH,
    },
    gender: null,
    size: [] as number[],
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    notEmpty: (state) => {
      state.isNotEmpty = true;
    },

    empty: (state) => {
      state.isNotEmpty = false;
    },
    filterPriceUpdate: (state, action) => {
      state.filterObj.price = action.payload;
    },
    filterObjUpdate: (state, action) => {
      state.filterObj = action.payload;
    },
    filterObjClear: (state) => {
      state.filterObj = initialState.filterObj;
      state.isNotEmpty = false;
    },
  },
});

export const {
  filterObjUpdate,
  filterPriceUpdate,
  filterObjClear,
  notEmpty,
  empty,
} = filterSlice.actions;

export default filterSlice.reducer;
