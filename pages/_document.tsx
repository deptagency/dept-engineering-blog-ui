import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { resolve } from 'url'
import { processEnv } from '@lib/processEnv'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await super.getInitialProps(ctx)
  }

  render() {
    const { pageProps } = this.props.__NEXT_DATA__.props
    const { cmsData, settings } = pageProps || { cmsData: null, settings: null }
    const { settings: cmsSettings, bodyClass } = cmsData || { settings: null, bodyClass: '' }
    const { lang } = settings || cmsSettings || { lang: 'en' }

    return (
      <Html {...{ lang, className: 'casper' }}>
        <Head>
          <link rel="alternate" type="application/rss+xml" title="Dept Engineering Blog RSS Feed" href={`${resolve(processEnv.siteUrl, 'rss.xml')}`} />
          <link rel="preload" href="/fonts/MaisonNeue-Demi.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/MaisonNeue-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/MaisonNeue-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/MaisonNeue-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Head>
        <body {...{ className: bodyClass }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
