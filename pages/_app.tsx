import Script from 'next/script'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Global } from '@emotion/react'

import * as gtag from '@lib/gtag'

import '@styles/screen.css'
import '@styles/screen-fixings.css'
import '@styles/prism.css'
import '@styles/toc.css'
import '@styles/dept.css'

import { fonts } from '@components/common/fonts'
import { globals } from '@components/common/globals'
import { OverlayProvider } from '@components/contexts/overlayProvider'

/**
 * Fix duplicate CSS declarations
 */
const RootEmotionComponent = styled.div``

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <RootEmotionComponent>
      <Global styles={fonts} />
      <Global styles={globals} />
      <OverlayProvider>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
          }}
        />
        <Component {...pageProps} />
      </OverlayProvider>
    </RootEmotionComponent>
  )
}

export default App
