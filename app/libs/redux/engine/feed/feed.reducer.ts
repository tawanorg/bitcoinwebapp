import { createSlice } from "@reduxjs/toolkit";

export interface FeedState {
  recent: [];
}

const initialState: FeedState = {
  recent: [],
};

const feed = createSlice({
  name: "feed",
  initialState,
  reducers: {
    initialFeed: (state) => {
      state.recent = [];
    },
  },
});

export const actions = feed.actions;

export default feed.reducer;
