import styled from '@emotion/styled';
import { colors } from '@components/common/colors';
import { spaces } from '@components/common/spaces';

interface NavProps {
  isRightNav?: boolean;
}

export const NavList = styled.ul<NavProps>(
  ({
    isRightNav = false
  }) => `
  position: absolute;
  z-index: 1000;
  display: flex;
  margin: 0 0 0 -${spaces.xs}px;
  padding: 0;
  list-style: none;
  transition: all 1.0s cubic-bezier(0.19, 1, 0.22, 1);

  ${isRightNav && `
    position: relative;
    margin: 0;
  `}
`);

export const NavListItem = styled.li<NavProps>(
  ({
    isRightNav = false
  }) => `
    display: block;
    margin: 0;
    padding: 0;

    &:last-of-type {
      padding-right: ${spaces.md}px;
    }

    a {
      position: relative;
      display: block;
      padding: ${spaces.xs}px ${spaces.xs}px;
      color: ${colors.onyx};
      opacity: 1;
      text-transform: uppercase;
      transition: opacity 0.35s ease-in-out;

      &:hover {
        text-decoration: none;
        opacity: 1;
      }
    }

    ${isRightNav && `
      &:last-of-type {
        padding-right: inherit;
      }

      a {
        white-space: inherit;
        text-transform: none;
      }
    `}
  `)
