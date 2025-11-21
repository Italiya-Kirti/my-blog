import { AppProps } from "next/app";

import "@/theme/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
