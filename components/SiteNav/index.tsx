/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from '@components/Navigation'
import { SocialLinks } from '@components/SocialLinks'
import { SubscribeButton } from '@components/SubscribeButton'
import { getLang, get } from '@utils/use-lang'
import { GhostSettings, NavItem, NextImage } from '@lib/ghost'
import { NavContainer, NavContent, NavLeft, NavLeftWrapper, NavLogoLink, NavRight, StyledSiteNav } from './components'

export interface SiteNavProps {
  settings: GhostSettings
}

export const SiteNav = ({ settings }: SiteNavProps) => {
  const text = get(getLang(settings.lang))
  const { processEnv } = settings
  const { customNavigation, nextImages, memberSubscriptions } = processEnv
  const config: {
    overwriteNavigation: NavItem[]
    addNavigation: NavItem[]
  } = {
    overwriteNavigation: customNavigation || [],
    addNavigation: customNavigation || [],
  }
  const site = settings
  const siteUrl = settings.processEnv.siteUrl
  const title = text(`SITE_TITLE`, site.title)
  const secondaryNav = site.secondary_navigation && 0 < site.secondary_navigation.length
  const siteLogo = site.logoImage

  const { navigation } = site

  // overwrite navigation if specified in options
  const labels = navigation?.map((item) => item.label)
  if (labels && labels.length > 0 && config.overwriteNavigation && config.overwriteNavigation.length > 0) {
    config.overwriteNavigation.map((item) => {
      const index = (item.label && labels.indexOf(item.label)) || -1
      if (index > -1 && navigation && navigation[index]) {
        navigation[index].url = item.url
      }
    })
  }

  // add navigation if specified in options
  const urls = navigation?.map((item) => item.url)
  if (config.addNavigation && config.addNavigation.length > 0) {
    config.addNavigation.map((item) => urls?.indexOf(item.url) === -1 && navigation?.push(item))
  }

  const imageHeight = 21;
  const calcSiteLogoWidth = (image: NextImage, targetHeight: number) => {
    const { width, height } = image.dimensions
    return (targetHeight * width) / height
  }

  return (
    <NavContainer>
        <StyledSiteNav>
          <NavLeftWrapper>
            <NavLeft>
              <Link href="/">
                {siteLogo && nextImages.feature ? (
                  <NavLogoLink imageHeight={imageHeight}>
                    <div
                      style={{
                        height: '${targetHeight}px',
                        width: `${calcSiteLogoWidth(siteLogo, imageHeight)}px`,
                      }}
                    >
                      <Image src={siteLogo.url} alt={title} layout="responsive" quality={nextImages.quality} {...siteLogo.dimensions} />
                    </div>
                  </NavLogoLink>
                ) : site.logo ? (
                  <NavLogoLink imageHeight={imageHeight}>
                    <img src={site.logo} alt={title} />
                  </NavLogoLink>
                ) : (
                  <NavLogoLink imageHeight={imageHeight}>{title}</NavLogoLink>
                )}
              </Link>
              <NavContent>
                <Navigation data={navigation} />
              </NavContent>
            </NavLeft>
          </NavLeftWrapper>
          <NavRight>
            {secondaryNav ? (
              <Navigation data={site.secondary_navigation} isRightNav />
            ) : (
              <div className="social-links">
                <SocialLinks {...{ siteUrl, site }} />
              </div>
            )}
            {memberSubscriptions && <SubscribeButton {...{ lang: settings.lang }} />}
          </NavRight>
        </StyledSiteNav>
    </NavContainer>
  )
}
