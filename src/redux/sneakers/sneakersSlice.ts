import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MokkyDev } from '../../services/MokkyDev';

const mokkyDev = new MokkyDev();

export const getSneakers = createAsyncThunk('sneakers', mokkyDev.getSneakers);
export const getSneakersByFilter = createAsyncThunk(
  'sneakers/filter',
  mokkyDev.getSneakersByFilter
);

interface IApiRes {
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
  items: [];
}

interface SneakersState {
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
  items: [];
  loading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: SneakersState = {
  items: [],
  meta: {
    total_items: 0,
    total_pages: 0,
    current_page: 1,
    per_page: 0,
    remaining_count: 0,
  },
  loading: false,
  isError: false,
  errorMessage: '',
};

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    removeItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSneakers.pending, (state) => {
      state.loading = true;
      state.isError = false;
    });
    builder.addCase(
      getSneakers.fulfilled,
      (state, { payload }: PayloadAction<IApiRes>) => {
        const { meta, items } = payload;
        state.items = [...state.items, ...items];
        state.meta.current_page = meta.current_page;
        state.meta.per_page = meta.per_page;
        state.meta.remaining_count = meta.remaining_count;
        state.meta.total_items = meta.total_items;
        state.meta.total_pages = meta.total_pages;
        state.isError = false;
        state.loading = false;
      }
    );
    builder.addCase(getSneakers.rejected, (state) => {
      state.isError = true;
      state.loading = false;
      state.errorMessage =
        'Alas and ah, there is an error on the server side. try again later';
    });

    builder.addCase(getSneakersByFilter.pending, (state) => {
      state.loading = true;
      state.isError = false;
    });
    builder.addCase(
      getSneakersByFilter.fulfilled,
      (state, { payload }: PayloadAction<IApiRes>) => {
        const { meta, items } = payload;
        state.items = [...state.items, ...items];
        state.meta.current_page = meta.current_page;
        state.meta.per_page = meta.per_page;
        state.meta.remaining_count = meta.remaining_count;
        state.meta.total_items = meta.total_items;
        state.meta.total_pages = meta.total_pages;
        state.isError = false;
        state.loading = false;
      }
    );
    builder.addCase(getSneakersByFilter.rejected, (state) => {
      state.isError = true;
      state.loading = false;
      state.errorMessage =
        'Alas and ah, there is an error on the server side. try again later';
    });
  },
});

export const { removeItems } = sneakersSlice.actions;
export default sneakersSlice.reducer;
