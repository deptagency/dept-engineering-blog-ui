import styled from '@emotion/styled';
import { SITE_NAV_HEIGHT } from '@components/SiteNav/components';
import { Headline } from '@components/text/Headlines';
import { spaces } from '@components/common/spaces';

export const StyledHeader = styled.header`
  padding-top: ${SITE_NAV_HEIGHT}px;
`;

export const StyledSubHeadline = styled(Headline)`
  margin-top: ${spaces.xs}px;
`;

export const StyledHeaderContent = styled.div<{ isHome?: boolean }>`
  padding: 12vw 0 ${spaces.s}px;

  @media (min-width: 500px) {
    padding-bottom: ${spaces.m}px;
  }

  @media (min-width: 900px) {
    padding: 5vw 0 ${spaces.s}px;
  }

  ${({ isHome }) => isHome && `
    padding: ${spaces.m}px 0;

    @media (min-width: 900px) {
      padding: ${spaces.l}px 0;
    }
  `}
`;
