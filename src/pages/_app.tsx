import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import "react-phone-number-input/style.css";
import "react-phone-input-2/lib/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
