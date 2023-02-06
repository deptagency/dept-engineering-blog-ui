import Link from 'next/link'

import { GhostSettings, NavItem } from '@lib/ghost'

import { Grid } from '@components/Grid'
import { Navigation } from '@components/Navigation'
import { SubscribeButton } from '@components/Subscribe/button'
import { ArrowLeftIcon } from '@icons/ArrowIcons'

import {
  CareersPageNudge,
  NavContainer,
  NavContent,
  NavLeft,
  NavLeftWrapper,
  NavRight,
  OpenRolesButton,
  StyledSiteNav
} from './components'
import { LogoLink } from './LogoLink'

export interface SiteNavProps {
  settings: GhostSettings
  showCareersNudge?: boolean
  isCareersPage?: boolean
}

interface SiteNavConfig {
  overwriteNavigation: NavItem[]
  addNavigation: NavItem[]
}

export const SiteNav = ({
  settings,
  showCareersNudge = false,
  isCareersPage = false
}: SiteNavProps) => {
  const {
    processEnv: { customNavigation, memberSubscriptions },
    secondary_navigation,
    navigation,
    lang
  } = settings

  const config: SiteNavConfig = {
    overwriteNavigation: customNavigation || [],
    addNavigation: customNavigation || []
  }

  // overwrite navigation if specified in options
  const labels = navigation?.map((item) => item.label)
  if (
    labels &&
    labels.length > 0 &&
    config.overwriteNavigation &&
    config.overwriteNavigation.length > 0
  ) {
    // @todo refactor to remove reassignment and improper use of Array.map
    // eslint-disable-next-line array-callback-return
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
    config.addNavigation.map(
      (item) => urls?.indexOf(item.url) === -1 && navigation?.push(item)
    )
  }

  const NavRightChildren = isCareersPage ? (
    <Navigation
      data={[
        {
          url: '/',
          label: (
            <Grid container wrap="nowrap" alignItems="center" columnSpacing={2}>
              <ArrowLeftIcon />
              <span>Back to the DEPT® Developer Community</span>
            </Grid>
          )
        }
      ]}
      isRightNav
    />
  ) : (
    <>
      {secondary_navigation && secondary_navigation.length > 0 && (
        <Navigation data={secondary_navigation} isRightNav />
      )}
      {memberSubscriptions && <SubscribeButton {...{ lang }} />}
    </>
  )

  return (
    <NavContainer showCareersNudge={showCareersNudge}>
      {showCareersNudge && <CareersPageNudge></CareersPageNudge>}
      <StyledSiteNav>
        <NavLeftWrapper>
          <NavLeft>
            <LogoLink settings={settings} />
            {isCareersPage && (
              <Link
                href="https://www.deptagency.com/careers/roles/"
                passHref
                legacyBehavior
              >
                <OpenRolesButton as="a">Explore Open Roles</OpenRolesButton>
              </Link>
            )}
            {navigation && navigation.length > 0 && (
              <NavContent>
                <Navigation data={navigation} />
              </NavContent>
            )}
          </NavLeft>
        </NavLeftWrapper>
        <NavRight>{NavRightChildren}</NavRight>
      </StyledSiteNav>
    </NavContainer>
  )
}
