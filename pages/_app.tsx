import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "@/scss/MaterialTheme";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
// @ts-ignore
import "../scss/app.scss"; // GLOBAL STYLES
// @ts-ignore
import "../scss/pc/main.scss"; // PC MAIN STYLES
// @ts-ignore
import "../scss/mobile/main.scss"; // MOBILE MAIN STYLES

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [ theme, setTheme ] = useState(createTheme(light));

  // SocketIO, Redux, MUI, Apollo Client ...
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
