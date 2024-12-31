import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISneaker } from '../../interface/ISneaker';
import { IFormData } from '../../interface/IFormData';
import { MokkyDev } from '../../services/MokkyDev';

const mokkyDev = new MokkyDev();

export const postOrder = createAsyncThunk('order/post', mokkyDev.postOrder);
export const getOrderCount = createAsyncThunk(
  'order/getNumberOrder',
  mokkyDev.getOrderCount
);

interface OrderState {
  numberOrder: number;
  buyer: {
    name: string;
    email: string;
    phone: string;
  };
  goods: ISneaker[];
  count: number;
  orderAmount: number;
}

const initialState: OrderState = {
  numberOrder: 0,
  buyer: {
    name: '',
    email: '',
    phone: '',
  },
  goods: [],
  count: 0,
  orderAmount: 0,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addGoods: (state, { payload }: PayloadAction<ISneaker>) => {
      state.goods = [...state.goods, payload];
      state.count = state.goods.length;
      state.orderAmount = state.orderAmount + payload.price;
    },

    removeGoods: (state, { payload }: PayloadAction<ISneaker>) => {
      state.orderAmount = state.orderAmount - payload.price;
      state.goods = state.goods.filter((sneaker) => sneaker.id !== payload.id);
      state.count = state.goods.length;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.fulfilled, (state) => {
      state.goods = [];
      state.count = 0;
      state.orderAmount = 0;
      state.buyer = {
        name: '',
        email: '',
        phone: '',
      };
    });
    builder.addCase(
      getOrderCount.fulfilled,
      (state, { payload }: PayloadAction<number>) => {
        state.numberOrder = payload + 1;
      }
    );
  },
});

export const { addGoods, removeGoods } = orderSlice.actions;

export default orderSlice.reducer;
