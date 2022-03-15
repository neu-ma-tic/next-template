import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import Script from 'next/script';

export default class Doc extends Document {

  render() {
    return (
      <Html>
        <Head>
            {CssBaseline.flush()}
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}