import styled from '@emotion/styled';
import { SITE_NAV_HEIGHT } from '@components/SiteNav/components';
import { spaces } from '@components/common/spaces';

export const StyledHeader = styled.header`
  padding-top: ${SITE_NAV_HEIGHT}px;
`;

export const StyledHeaderContent = styled.div<{ isHome?: boolean }>`
  padding: ${spaces.lg}px 0;

  ${({ isHome }) => isHome && `
    @media (min-width: 900px) {
      padding: ${spaces.xl}px 0;
    }
  `}
`;
