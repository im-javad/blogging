import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const fetchUsers = createAsyncThunk("posts/fetchUsers", async () => {
  const response = await client.get("users");

  return response;
});

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  // sortComparer: (a, b) => a.name.localCompare(b.name),
});
const initialState = usersAdapter.getInitialState({
  inLoading: 0,
  error: 0,
});

const usersSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.inLoading = 1;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      usersAdapter.upsertMany(state, action.payload);
      state.inLoading = 0;
    },
    [fetchUsers.rejected]: (state) => {
      state.inLoading = 0;
    },
  },
});

export const {
  /* HERE .... */
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
