import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("posts");

  return response;
});

const postsAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

export const {
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
} = postsAdapter.getSelectors((state) => state.posts);

const initialState = postsAdapter.getInitialState({
  inLoading: 0,
  error: 0,
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.inLoading = 1;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      postsAdapter.upsertMany(state, action.payload);
      state.inLoading = 0;
    },
    [fetchPosts.rejected]: (state) => {
      state.inLoading = 0;
      state.error = 1;
    },
  },
});

export const postReducer = postSlice.reducer;
