import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse, GetTokenResponse } from "libs/types";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as API from "./token.api";
import { actions } from "./token.reducer";

function* getToken(action: PayloadAction<GetTokenResponse>) {
  try {
    const { token, currency } = action.payload;
    // something wrong with redux-saga call type
    // @ts-ignore
    const result: ApiResponse<GetTokenResponse | null> = yield call(
      API.fetchTokenSlashCurrency,
      {
        token,
        currency,
      }
    );
    yield delay(200);
    yield put(actions.updateFetchToken(result.data));
  } catch (error) {
    console.error(error);
    yield put(actions.errorFetchToken(error as Error));
  }
}

export default function* tokenRootSaga() {
  yield takeLatest(actions.requestFetchToken.type, getToken);
}
