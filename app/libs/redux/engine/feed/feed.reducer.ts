import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EngineException } from "../../types";
import type { Post } from "./feed.types";

export interface FeedState {
  data: {
    recent: Post[];
  };
  loading: boolean;
  error?: EngineException;
}

const initialState: FeedState = {
  data: {
    recent: [],
  },
  loading: false,
  error: null,
};

const feed = createSlice({
  name: "feed",
  initialState,
  reducers: {
    requestFetchRecentFeed: (state) => {
      state.loading = true;
    },
    updateFetchRecentFeed: (state, action: PayloadAction<Post[]>) => {
      state.data.recent = action.payload;
      state.loading = false;
    },
    errorFetchRecentFeed: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const actions = feed.actions;

export default feed.reducer;
