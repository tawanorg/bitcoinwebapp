import { DesignProvider } from "@bitcoin/design";
import type { AppProps } from "next/app";
import "../libs/design/styles/all.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DesignProvider>
      <Component {...pageProps} />
    </DesignProvider>
  );
}

export default MyApp;
