import { createSlice } from "@reduxjs/toolkit";
import { EngineException } from "../../types";

export interface FeedState {
  data: {
    recent: any[];
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
    initialFeed: (state) => {
      state.data.recent = [];
    },
  },
});

export const actions = feed.actions;

export default feed.reducer;
