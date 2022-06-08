import { createSelector } from "reselect";
import { RootState } from "../../store";

const selectFeedEntity = (state: RootState) => state.feed;

export const selectContext = createSelector(
  selectFeedEntity,
  ({ data, ...context }) => context
);

export const selectRecentFeedPosts = createSelector(
  selectFeedEntity,
  (state) => state.data.recent ?? []
);
