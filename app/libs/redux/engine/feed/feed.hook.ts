import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./feed.reducer";
import { selectContext, selectRecentFeedPosts } from "./feed.selectors";

const useFeedEngine = () => {
  const dispatch = useDispatch();
  const recentPosts = useSelector(selectRecentFeedPosts);
  const context = useSelector(selectContext);

  const getFetchRecentFeed = useCallback(() => {
    dispatch(actions.requestFetchRecentFeed());
  }, []);

  return {
    data: {
      recent: recentPosts,
    },
    ...context,
    actions: {
      getFetchRecentFeed,
    },
  };
};

export default useFeedEngine;
