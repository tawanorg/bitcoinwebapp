import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetTokenResponse } from "libs/types";
import { EngineException } from "../../types";
import { TokenSlashCurrency } from "./token.types";
import utils from "./token.utils";

export interface TokenState {
  data: Partial<Record<string, GetTokenResponse>>;
  loading: boolean;
  error?: EngineException;
}

const initialState: TokenState = {
  data: {},
  loading: false,
  error: null,
};

const token = createSlice({
  name: "token",
  initialState,
  reducers: {
    requestFetchToken: (state, payload: PayloadAction<TokenSlashCurrency>) => {
      state.loading = true;
    },
    updateFetchToken: (
      state,
      action: PayloadAction<GetTokenResponse | null>
    ) => {
      if (!action.payload) return;
      const { token, currency } = action.payload;
      const tokenKey = utils.makeTokenKey({ token, currency });
      state.data[tokenKey] = action.payload;
      state.loading = false;
    },
    errorFetchToken: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const actions = token.actions;

export default token.reducer;
