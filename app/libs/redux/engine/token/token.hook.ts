import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./token.reducer";
import {
  selectAllTokens,
  selectContext,
  selectTokenSlashCurrency,
} from "./token.selectors";
import { TokenSlashCurrency } from "./token.types";

const useTokenEngine = () => {
  const dispatch = useDispatch();
  const allTokens = useSelector(selectAllTokens);
  const context = useSelector(selectContext);

  const getTokenSlashCurrency = useCallback(
    ({ token, currency }: TokenSlashCurrency) => {
      dispatch(actions.requestFetchToken({ token, currency }));
    },
    []
  );

  return {
    data: allTokens,
    ...context,
    actions: {
      getTokenSlashCurrency,
      selectTokenSlashCurrency,
    },
  };
};

export default useTokenEngine;
