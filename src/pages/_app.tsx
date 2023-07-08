import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import "react-phone-number-input/style.css";
import "react-phone-input-2/lib/style.css";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
