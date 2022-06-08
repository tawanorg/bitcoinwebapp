import type { Post } from "libs/types";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as API from "./feed.api";
import { actions } from "./feed.reducer";

function* fetchWeeklyPosts() {
  try {
    // something wrong with redux-saga call type
    // @ts-ignore
    const fetchResult: Post[] = yield call(API.fetchWeeklyPosts);
    yield delay(200);
    yield put(actions.updateFetchRecentFeed(fetchResult));
  } catch (error) {
    console.error(error);
    yield put(actions.errorFetchRecentFeed(error as Error));
  }
}

function* feedSaga() {
  yield takeLatest(actions.requestFetchRecentFeed.type, fetchWeeklyPosts);
}

export default feedSaga;
