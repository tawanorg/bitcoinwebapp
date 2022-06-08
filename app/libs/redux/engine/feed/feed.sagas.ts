import { takeLatest } from "redux-saga/effects";
import notify from "../../utils/notify";
import { actions } from "./feed.reducer";

function* feedSaga() {
  yield takeLatest(actions.initialFeed.type, () => {
    notify.success("🔥 Fetching Feed data from API");
  });
}

export default feedSaga;
