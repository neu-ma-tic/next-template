import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"

const theme = createTheme({
  type: 'dark'
});

function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;