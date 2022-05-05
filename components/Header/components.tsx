import styled from '@emotion/styled';
import { SITE_NAV_HEIGHT } from '@components/SiteNav/components';
import { Headline } from '@components/text/Headlines';
import { spaces } from '@components/common/spaces';

export const StyledHeader = styled.header`
  padding-top: ${SITE_NAV_HEIGHT}px;
`;

export const StyledSubHeadline = styled(Headline)`
  margin-top: ${spaces.xxxs}px;
`;

export const StyledHeaderContent = styled.div<{ isHome?: boolean }>`
  padding: ${spaces.lg}px 0;

  ${({ isHome }) => isHome && `
    padding: ${spaces.lg}px 0;

    @media (min-width: 900px) {
      padding: ${spaces.xl}px 0;
    }
  `}
`;
