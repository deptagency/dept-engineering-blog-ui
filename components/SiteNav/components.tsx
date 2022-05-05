import styled from '@emotion/styled';
import { colors } from '@components/common/colors';
import { Container } from '@components/helpers/Container';
import { spaces } from '@components/common/spaces';

export const SITE_NAV_HEIGHT = spaces.xl;

export const NavContainer = styled(Container)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: ${colors.white};
`;

export const StyledSiteNav = styled.nav`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  height: ${SITE_NAV_HEIGHT}px;
  font-size: 1.3rem;
`;

export const NavLeftWrapper = styled.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
`;

export const NavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: ${spaces.xs}px;
  padding: ${spaces.xs}px 0 ${spaces.xxl}px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    padding-left: inherit;
  }
`;

/* Site Nav Hack Explanation (above):

What's happening above is NavLeft is set to overflow-x and allow sideways scrolling, so that when there isn't enough space for all nav items (either due to lots of nav items, or a small viewport), you can still scroll side-to-side to reach them. Also, there is a small gradient on the left and right side covering the menu so that the menu goes offscreen smoothly.

The knock-on effect of this is ugly browser-scroll bars at the bottom, so 128px of padding-bottom and a fixed height parent (StyledSiteNav) hides that entirely. Slightly hacky code. But nice clean end-result.

*/

export const NavLogoLink = styled.a<{ imageHeight: number }>(({ imageHeight }) =>`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: ${spaces.lg}px;
  padding: ${spaces.xs}px 0;
  color: ${colors.white};
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    display: block;
    width: auto;
    height: ${imageHeight}px;
  }
`);

export const NavContent = styled.div`
  position: relative;
  align-self: flex-start;
`;

export const NavRight = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${spaces.xs}px 0;
  height: ${SITE_NAV_HEIGHT}px;

  @media (max-width: 700px) {
    display: inherit
  }
`;
