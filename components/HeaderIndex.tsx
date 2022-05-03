import Image from 'next/image'
import { GridWrapper, Col, Row } from '@components/Grid'
import { HeaderBackground } from '@components/HeaderBackground'
import { getLang, get } from '@utils/use-lang'
import { GhostSettings, NextImage } from '@lib/ghost'

interface HeaderIndexProps {
  settings: GhostSettings
}

export const HeaderIndex = ({ settings }: HeaderIndexProps) => {
  const text = get(getLang(settings.lang))
  const site = settings
  const siteLogo = site.logoImage
  const coverImg = site.cover_image || ''
  const title = text(`SITE_TITLE`, site.title)

  const { processEnv } = settings
  const { siteUrl, nextImages } = processEnv
  const { feature: nextFeatureImages, quality: imageQuality } = nextImages

  // targetHeight is coming from style .site-logo
  const targetHeight = 55
  const calcSiteLogoWidth = (image: NextImage, targetHeight: number) => {
    const { width, height } = image.dimensions
    return (targetHeight * width) / height
  }

  return (
    <header className="site-home-header">
      <HeaderBackground srcImg={coverImg}>
        <div className="inner">
          {/* <SiteNav className="site-nav" {...{ siteUrl, settings }} /> */}
          <div className="grid-wrapper">
            <GridWrapper>
              <Row>
                <Col width="60%">
                <div className="header-tagline">
                  <h2 className="site-description">{site.description}</h2>
                </div>
                </Col>
              </Row>
            </GridWrapper>
          </div>
        </div>
      </HeaderBackground>
    </header>
  )
}
