import { AppProps } from "next/app";
import { ThemeProvider as FlowbiteThemeProvider } from "flowbite-react";
import customTheme from "@/theme/components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    
        <FlowbiteThemeProvider
          theme={{
            theme: {
              ...FlowbiteThemeProvider.useTheme().theme,
              ...customTheme,
            },
          }}
        >
          <Component {...pageProps} />
          
        </FlowbiteThemeProvider>
  );
};

export default App;
