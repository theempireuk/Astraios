import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          {this.props.styleTags}
          <meta name='fragment' content='!' />
          <meta name='mobile-web-app-capable' content='yes' />
          <link rel='shortcut icon' type='image/png' href='/astraios.png' />
          <link rel='apple-touch-icon' sizes='196x196' type='image/png' href='/astraios.png' />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}