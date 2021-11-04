import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          />
          <link
            rel="stylesheet"
            href="https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2"
          />
          <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const materialSheet = new ServerStyleSheets();
  const styledComponentSheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentSheet.collectStyles(
            materialSheet.collect(<App {...props} />),
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialSheet.getStyleElement(),
        styledComponentSheet.getStyleElement(),
      ],
    };
  } finally {
    styledComponentSheet.seal();
  }
};

export default MyDocument;
