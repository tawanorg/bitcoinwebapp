import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import feedReducer from "./engine/feed/feed.reducer";
import feedSaga from "./engine/feed/feed.sagas";
import tokenReducer from "./engine/token/token.reducer";
import tokenRootSaga from "./engine/token/token.saga";
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
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(function* rootSaga() {
  notify.success("✅ Reducer, Saga initialized");
  yield all([
    // Put all sagas in here
    feedSaga(),
    tokenRootSaga(),
  ]);
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
