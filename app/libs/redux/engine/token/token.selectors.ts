import {
  differenceInDays,
  differenceInMonths,
  differenceInWeeks,
} from "date-fns";
import { ChartTimeFrame } from "libs/types";
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
  timeframe,
}: TokenSlashCurrency & { timeframe: ChartTimeFrame }) =>
  createSelector(selectTokenEntity, (state) => {
    const targetKey = utils.makeTokenKey({ token, currency });
    if (state.data && targetKey in state.data) {
      const data = state.data[targetKey];
      if (!data) return null;
      const history = data.history.filter((h) => {
        switch (timeframe) {
          case "24 H":
            return Math.abs(differenceInDays(new Date(), new Date(h[0]))) < 1;
          case "7 D":
            return Math.abs(differenceInWeeks(new Date(), new Date(h[0]))) < 1;
          case "1 M":
            return Math.abs(differenceInMonths(new Date(), new Date(h[0]))) < 1;
          default:
            return data;
        }
      });
      return {
        ...data,
        history,
      };
    }
    return null;
  });
