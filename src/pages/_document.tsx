import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { injectGlobal } from "styled-components";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

  * { 
    font-family: 'Spoqa Han Sans', 'san-serif';
    color: #4A4A4A;
  }

  h1 {
    font-weight: bold;
    font-size: 48px;
    text-align: left;
    margin: 0 0 12px 0;
    letter-spacing: 1.2px;
    line-height: 62px;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 32px;
      line-height: 42px;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 32px;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 22px;
      line-height: 32px;
    }
  }

  h3 {
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 27px;
    margin: 0;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 18px;
      line-height: 28px;
    }
  }
  ol li {
    line-height: 2.0;
  }

  mark {
    display: inline-block; 
    height: .5em;
    line-height: .1em;
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
    const page = context.renderPage((App: any) => (props: any) =>
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
          {this.renderAmplitude()}
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
        <meta name="description" content="plug" />
        <link rel="stylesheet" href="https://unpkg.com/react-tabs@2/style/react-tabs.css" />
      </React.Fragment>
    );
  };

  private renderAmplitude = () => {
    return (<script type="text/javascript" dangerouslySetInnerHTML={{
      __html: ` (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
      ;r.type="text/javascript";r.async=true
      ;r.src="https://cdn.amplitude.com/libs/amplitude-4.4.0-min.gz.js"
      ;r.onload=function(){if(e.amplitude.runQueuedFunctions){
      e.amplitude.runQueuedFunctions()}else{
      console.log("[Amplitude] Error: could not load SDK")}}
      ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
      ;function s(e,t){e.prototype[t]=function(){
      this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
      var o=function(){this._q=[];return this}
      ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
      ;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
      ;return this}
      ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
      ;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
      ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
      ;function v(e){function t(t){e[t]=function(){
      e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
      for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
      e=(!e||e.length===0?"$default_instance":e).toLowerCase()
      ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
      ;e.amplitude=n})(window,document);
    
      amplitude.getInstance().init("3c0b0131ea75046d1b81910d414dc0d7");`}} />);
  }
}
