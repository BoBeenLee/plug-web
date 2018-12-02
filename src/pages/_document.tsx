import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { injectGlobal } from "styled-components";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  
  * { 
    font-family: SpoqaHanSans;
    color: #4A4A4A;
  }

  h1 {
    font-weight: bold;
    font-size: 48px;
    text-align: left;
    margin: 0 0 12px 0;
    letter-spacing: 1.2px;
    line-height: 62px;
  }

  h2 {
    font-weight: 300;
    font-size: 36px;
  }

  h3 {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 27px;
    margin: 0;
  }

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

export default class MyDocument extends Document<any> {
  public static getInitialProps(context) {
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(
      (App: any) => (props: any) =>
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
