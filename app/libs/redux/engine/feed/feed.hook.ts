import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./feed.reducer";
import { selectRecentFeed } from "./feed.selectors";

const useFeedEngine = () => {
  const dispatch = useDispatch();
  const recentFeed = useSelector(selectRecentFeed);

  const getInitialFeed = useCallback(() => {
    dispatch(actions.initialFeed());
  }, [dispatch]);

  return {
    data: { recent: recentFeed },
    getInitialFeed,
  };
};

export default useFeedEngine;
