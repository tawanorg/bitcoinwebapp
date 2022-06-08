import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import feedReducer from "./engine/feed/feed.reducer";
import feedSaga from "./engine/feed/feed.sagas";
import notify from "./utils/notify";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(function* rootSaga() {
  notify.success("✅ Reducer, Saga initialized");
  yield all([
    // Put all sagas in here
    feedSaga(),
  ]);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
