import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import feedReducer from "./engine/feed/feed.reducer";
import feedSaga from "./engine/feed/feed.sagas";
import { IS__DEV } from "./utils/helper";
import notify from "./utils/notify";

const sagaMiddleware = createSagaMiddleware();
const middlewares: any[] = [sagaMiddleware];

if (IS__DEV) {
  const { createLogger } = require("redux-logger");
  middlewares.push(
    createLogger({
      collapsed: false,
    })
  );
}

const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
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
