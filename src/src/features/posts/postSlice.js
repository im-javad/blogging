import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const defaultNewPostData = {
  date: Date.now(),
  reactions: {
    eyes: 0,
    heart: 0,
    hooray: 0,
    rocket: 0,
    thumbsUp: 0,
  },
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("posts");

  return response;
});

export const storeAndSaveNewPost = createAsyncThunk(
  "posts/storeNewPost",
  async (data) => {
    const response = await client.post("posts", data);

    return response;
  }
);

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
    [storeAndSaveNewPost.fulfilled]: postsAdapter.addOne,
  },
});

export const postReducer = postSlice.reducer;
