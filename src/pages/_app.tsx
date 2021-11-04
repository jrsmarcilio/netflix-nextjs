import React from "react"
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/global";
import theme from "../styles/theme";

import { MovieContextProvider } from '@/context/movie'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MovieContextProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </MovieContextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
