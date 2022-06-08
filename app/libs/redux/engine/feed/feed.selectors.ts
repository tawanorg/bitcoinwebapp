import { createSelector } from "reselect";
import { RootState } from "../../store";

const selectFeedEntity = (state: RootState) => state.feed;

export const selectRecentFeed = createSelector(
  selectFeedEntity,
  (state) => state.recent ?? []
);
