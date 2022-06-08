import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "./store";

function ReduxEngine<T>({ children }: PropsWithChildren<T>) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxEngine;
