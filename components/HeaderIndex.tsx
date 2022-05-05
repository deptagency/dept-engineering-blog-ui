import Image from 'next/image'
import Link from 'next/link'
import Grid from '@mui/material/Grid'

import { SiteNav } from '@components/SiteNav'
import { HeaderBackground } from '@components/HeaderBackground'
import { getLang, get } from '@utils/use-lang'
import { GhostSettings, NextImage } from '@lib/ghost'

interface HeaderIndexProps {
  settings: GhostSettings
}

/**
 * Delete me
*/

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
            <Grid className="grid-inner" container>
              <Grid item xs={12} md={10} lg={8}>
                <div className="header-tagline">
                  <h2 className="site-description">{site.description}</h2>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </HeaderBackground>
    </header>
  )
}
