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
  const { processEnv: { customNavigation, nextImages, memberSubscriptions, siteUrl }, title, secondary_navigation, logoImage, logo, navigation, lang } = settings
  const config: {
    overwriteNavigation: NavItem[]
    addNavigation: NavItem[]
  } = {
    overwriteNavigation: customNavigation || [],
    addNavigation: customNavigation || [],
  }
  const text = get(getLang(lang))
  const siteTitle = text(`SITE_TITLE`, title)

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
            {logoImage && nextImages.feature ? (
              <NavLogoLink imageHeight={imageHeight}>
                <div
                  style={{
                    height: '${targetHeight}px',
                    width: `${calcSiteLogoWidth(logoImage, imageHeight)}px`,
                  }}
                >
                  <Image src={logoImage.url} alt={siteTitle} layout="responsive" quality={nextImages.quality} {...logoImage.dimensions} />
                </div>
              </NavLogoLink>
            ) : logo ? (
              <NavLogoLink imageHeight={imageHeight}>
                <img src={logo} alt={siteTitle} />
              </NavLogoLink>
            ) : (
              <NavLogoLink imageHeight={imageHeight}>{siteTitle}</NavLogoLink>
            )}
            </Link>
            {
              navigation && navigation.length > 0 && (
                <NavContent>
                  <Navigation data={navigation} />
                </NavContent>
              )
            }
          </NavLeft>
        </NavLeftWrapper>
        <NavRight>
          {secondary_navigation && secondary_navigation.length > 0 ? (
            <Navigation data={secondary_navigation} isRightNav />
          ) : (
            <div className="social-links">
              <SocialLinks {...{ siteUrl, site: settings }} />
            </div>
          )}
          {memberSubscriptions && <SubscribeButton {...{ lang }} />}
        </NavRight>
      </StyledSiteNav>
    </NavContainer>
  )
}
