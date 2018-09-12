import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { injectGlobal } from "styled-components";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;

    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`;

interface IContext {
  pathname: string;
  query: string;
  asPath: string;
  req: {
    locale: string;
    localeDataScript: string;
    messages: object;
    antdLocale: object;
  };
  res?: object;
  renderPage: (func: any) => object;
}

export default class MyDocument extends Document {
  public static getInitialProps(context: IContext) {
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(
      (App: typeof React.Component) => (props: any) =>
        sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    return (
      <html>
        <Head>
          <title>plug web</title>
          {this.renderMetaTags()}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }

  private renderMetaTags = () => {
    return (
      <React.Fragment>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimal-ui, initial-scale=1.0, width=device-width, user-scalable=no"
        />
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="plug"
        />
      </React.Fragment>
    );
  };
}
