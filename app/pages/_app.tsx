import { DesignProvider } from "@bitcoin/design";
import { ReduxEngine } from "@bitcoin/redux";
import type { AppProps } from "next/app";
import "../libs/design/styles/all.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DesignProvider>
      <ReduxEngine>
        <Component {...pageProps} />
      </ReduxEngine>
    </DesignProvider>
  );
}

export default MyApp;
