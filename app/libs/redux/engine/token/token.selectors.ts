import { createSelector } from "reselect";
import { RootState } from "../../store";
import { TokenSlashCurrency } from "./token.types";
import utils from "./token.utils";

const selectTokenEntity = (state: RootState) => state.token;

export const selectAllTokens = createSelector(
  selectTokenEntity,
  (state) => state.data
);

export const selectContext = createSelector(
  selectTokenEntity,
  ({ data, ...context }) => context
);

export const selectTokenSlashCurrency = ({
  token,
  currency,
}: TokenSlashCurrency) =>
  createSelector(selectTokenEntity, (state) => {
    const targetKey = utils.makeTokenKey({ token, currency });
    if (state.data && targetKey in state.data) {
      return state.data[targetKey];
    }
    return null;
  });
