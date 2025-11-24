import "@/theme/globals.css";
import "flowbite";
import { ThemeProvider } from "flowbite-react";
import type { AppProps } from "next/app";
import customTheme from "@/theme/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
