import styled from '@emotion/styled'

import {
  CAREERS_NUDGE_HEIGHT,
  SITE_NAV_HEIGHT
} from '@components/SiteNav/components'
import { spaces } from '@components/common/spaces'

export const StyledHeader = styled.header<{
  showCareersNudge?: boolean
}>`
  padding-top: ${({ showCareersNudge }) =>
    SITE_NAV_HEIGHT + (showCareersNudge ? CAREERS_NUDGE_HEIGHT : 0)}px;
`

export const StyledHeaderContent = styled.div<{ isHome?: boolean }>`
  padding: ${spaces.lg}px 0;

  ${({ isHome }) =>
    isHome &&
    `
    @media (min-width: 900px) {
      padding: ${spaces.xxl}px 0;
    }
  `}
`
