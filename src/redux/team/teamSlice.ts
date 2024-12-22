import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MokkyDev } from "../../services/MokkyDev";

const mokkyDev = new MokkyDev();

export const getTeam = createAsyncThunk("team", mokkyDev.getAllTeam);

interface TeamState {
  team: [];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: TeamState = {
  team: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTeam.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      getTeam.fulfilled,
      (state, { payload }: PayloadAction<[]>) => {
        state.isLoading = false;
        state.isError = false;
        state.team = payload;
      }
    );
    builder.addCase(getTeam.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage =
        "Alas and ah, there is an error on the server side. try again later";
    });
  },
});

export default teamSlice.reducer;
